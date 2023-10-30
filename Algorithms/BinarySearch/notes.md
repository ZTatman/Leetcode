# Binary Search

**Binary search** is an efficient algorithm for finding an item (or position of said item) from a **sorted list** of items  
  
  
## **Let's play a game - A guessing game!**  
  
Imagine I have a array of numbers ```1 - 100```. I am thinking of a number ```n``` between this range 1 - 100,
and you have to guess which one it is. Upon each guess, I will say either **"no, thats too low!"** or **"nope, that is too high"**.
  
  
On and on this will continue until you guess the right number and win the game!
  
  
**How Do We Start?**
  
We could very well start by guessing the number 1, and then 2, and then 3, then 4, then 5, and so on all the way until 100... but almost no one would think to start their guess that way.  
Perhaps by chance, or by some hidden intuition, most of us would start the game by guessing with a number somewhere near, or close to the middle of the range of numbers.  
  
  Let's say you just start by guessing like so:  
  
    You: Hmm, is it 36??  
    
    Me:  No, thats too low!  
    
    You: Hmm ok, what about 75??  
    
    Me: Nope, that is too high!  
    
    You: Fine then, 43??  
    
    Me: No, thats too low!  
    
    You: Dammit, what about 58??  
    
    Me: Nope, that is too high!  
    
    You:  Is it 49??  
    
    Me: YESS!! You Win!!  

**The game has been won!** This is effectively Binary Search! But wait.. what is really happening here, and is it really that easy??  

### The Breakdown

To better understand Binary Search, let's pick apart what just happened in the game above:  

    1. We started with a number relatively in the middle.
    2. We compared our guess with the desired number.
    3. If the guess is > than the desired number, we guess a number lower than our previous one.
    4. If the guess is < than the desired number, we guess a number highger than our previous one.
    5. Repeat this process until we win!!
  
**This is the same process of elimination that Binary Search uses!**

The **hidden intuition** is that if we start with a number in the middle, we can determine whether or not to exclude the range of numbers below or above our guess.  
  
This eliminates the number of required guess neeeded to find the winning number by $\frac{1}{2}$ !  

### The Implementation

**JavaScript**
```javascript
function binarySearch(arr, )
```





