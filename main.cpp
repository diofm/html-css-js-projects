#include <iostream>
using namespace std;

    //rule 1
    int rule1(int num){
        int sum;
        while(num>0){
            sum += num % 10;
            num /= 10;
        }
        if(sum%2==0){
            cout<<"you failed rule 1, will have to check for the secondary rule"<<endl;
            return 0;
        }
        else{
            cout<<"you passed rule 1"<<endl;
            return 1;
        }
    }

    //rule 2
    int rule2(int num){
        int sum2=0;
        while(num>0){
            int currdigit=num%10;
            sum2 += (currdigit*currdigit);
            num /=10;
        }
        if (num % sum2 ==0){
            cout<<"you passed the rule 2"<<endl;
            return 1;
        }
        else{
            cout<<"you failed rule 2"<<endl;
            return 0;
        }
    }
 

    //rule 3
    int rule3(int num){
        if (num>10){
            cout<<"you passed rule 3"<<endl;
            return 1;
        }
        else{
            cout<<"you failed rule 3,so you are not special"<<endl;
            return 0;
        }
    }

    //rule 4
    void rule4(int num){
        int rev=0;
        int original=num;
        while (num !=0){
            int digit = num % 10;
            rev = (rev * 10)+ digit;
            num /= 10;
        }
        if (rev==original){
            if ((rule1(num)==0) && (rule2(num)==1) && (rule3(num)==1)){
            cout<<"the number is special with the exception"<<endl;
        }
    
        }
        else{
            cout<<"you failed rule 4"<<endl;
        }
    }

    int main(){
        int numb;
        cout<<"enter a positive integer"<<endl;
        cin>>numb;

        if (numb<=0){
            cout<<"the number should be a positive integer"<<endl;
            return 0;
        }

        if ((rule1(numb)==1) && (rule2(numb)==1) && rule3(numb)==1){
            cout<<"the number is special\n";
            return 0;
        }
        else{
            cout<<"the number is not special\n";
        }

        
        rule4(numb);

        return 0;
      


    }