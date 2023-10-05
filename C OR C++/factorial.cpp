#include<iostream>
using namespace std;
int factorial(int a)
{
    int answer=1;
    for(int i=a;i>0;--i)
    answer*=i;

    cout<<"\nFactorial of "<<a<<" is: "<<answer;
    return 0;
}
int main()
{
    int number;
    cout<<"Enter Number:";
    cin>>number;
    factorial(number);
    return 0;
}