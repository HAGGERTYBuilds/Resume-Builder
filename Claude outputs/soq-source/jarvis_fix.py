from PIL import Image
import numpy as np
src=np.array(Image.open('b6-008.png').convert('RGB')).astype(float)[8:]
h,w,_=src.shape
def bgrow(s):
    W=s.shape[1]; X=np.arange(W)
    band=s[0:8]; lum=band.mean(2)
    good=np.where((lum>185).all(0))[0]
    bad=np.setdiff1d(X,good)
    if len(bad):
        dist=np.min(np.abs(good[:,None]-bad[None,:]),1); good=good[dist>25]
    col=np.zeros((W,3))
    for c in range(3): col[:,c]=np.interp(X,good,band[:,good,c].mean(0))
    k=np.ones(15)/15
    for c in range(3): col[:,c]=np.convolve(np.pad(col[:,c],7,mode='edge'),k,'valid')
    return col
def make(ratio, Wc, name, outw, M=24):
    x0=(w-Wc)//2; s=src[:,x0:x0+Wc]; W=Wc
    H=int(round(W/ratio)); T=H-h
    row=bgrow(s)
    out=np.zeros((H,W,3)); out[:T]=row[None]; out[T:]=s
    for i in range(30):
        r=out[T+i]; m=(r.mean(1)>185)[:,None]; a=i/30
        out[T+i]=np.where(m,row*(1-a)+r*a,r)
    flip=s[:M][::-1]
    d=(row[None].mean(2)-flip.mean(2))/110
    hair=np.clip((d-0.5)/0.3,0,1)
    fade=(np.linspace(0,1,M)[:,None])**2.0
    a=(hair*fade)[...,None]
    out[T-M:T]=out[T-M:T]*(1-a)+flip*a
    im=Image.fromarray(out.clip(0,255).astype('uint8')).resize((outw,int(outw*H/W)),Image.LANCZOS)
    im.save('img/'+name,quality=93); return im
b=make(0.81,950,'hs-william-jarvis-bio.jpg',900)
g=make(0.6,740,'hs-william-jarvis.jpg',700)
b.crop((0,80,900,330)).save('jvseam.png')
