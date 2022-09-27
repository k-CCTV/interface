x1, y1, x2, y2 = map(int, input().split(' '))

if((x1<x2)and(x2!=0)):
    if(x2<=1050):
        x1=x1*0.6
        x2=x2*1.2
    elif(x2>1050):
        x2=1050
if((y2!=0)and(y1<y2)):
    if(y2<=800):
        y2=y2*1.2
        y1=y1*0.6
    elif(y2>800):
        y2=800

print("x1 =", x1,"y1 =", y1, "x2 =", x2, "y2 =", y2)