'use strict';

        //userName Question
       
        var userName = prompt ('Hi! My name is Xochil! Welcome to my page! What\'s your name?');
        console.log('Hi! My name is Xochil! Welcome to my page! What\'s your name? :' + userName);
       
        //Hometown Question
        
        
        var born = prompt('Was Xochil born in Seattle?');
        born= born.toLowerCase();
        if (born==='yes' || born==='y'){
            alert('Bingo, ' + userName + ', born and raised!');
        }else if (born=== 'no' || 'n'){
            alert ('Whoops!  I was totally born here!');
        }else {
            alert('Come on, answer yes or no!');
        }
        console.log('Was Xochil born in Seattle :' + born);
        
        //Own Business Question
        
        var ownBiz = prompt ('Has Xochil owned her business since 2013?');
        ownBix= ownBiz.toLowerCase();
        if (ownBiz==='yes' || ownBiz==='y'){
            alert('Yes, that\'s incorrect, ' + userName +'! I opened up my business, X Spa, in January 2013. Originally started in a small salon on Greenwood, I am now located in the heart of beautiful the beautiful Fremont neighborhood!');
            
        }else if (ownBiz=== 'no' || olderSib==='n'){
            alert('Try again, ' + userName );
        }else {
            alert('You have to answer yes or no!');
        }
        console.log('Has Xochil owned her business since 2013:' + ownBiz );
        
       //Management Experience
       var manage = prompt ('Does Xochil have management experience?');
       manage= manage.toLowerCase();
       if (manage==='yes' || manage==='y') {
           alert('That\'s right, ' + userName + '! I managed the spa team for several years at a local Seattle neighborhood salon!');
       }else if (manage==='no' || manage==='n'){
           alert('Try again, ' + userName);
       }else {
           alert('You must answer yes or no!');
       }
       console.log('Does Xochil have management experience:' + manage);

       //Problem Solving Question
       var problems = prompt ('Does Xochil love to solve problems?');
       problems= problems.toLowerCase();
       if (problems==='yes' || problems==='y') {
           alert('Bingo, ' + userName + ' ! I love finding solutions!');
       }else if (problems==='no' || problems==='n'){
           alert('Try again,' + userName);
       }else {
           alert('You must answer yes or no!');
       }
       console.log('Does Xochil love to solve problems:' + problems);

       //Work Question
       var work = prompt ('Does Xochil love working & collaborating with others?');
       work= work.toLowerCase();
       if (work==='yes' || work==='y') {
           alert('Bingo, ' + userName + ' , Xochil enjoys working alongside others to create the most dimensioanl work.');
       }else if (work==='no' || work==='n'){
           alert('Try again ' + userName);
       }else {
           alert('You must answer yes or no!');
       } 
       console.log('Does Xochil love working & collaborating with others:' + work);

       //Fave Number Question
       var faveNum = prompt ('Let\'s have some fun!  I am thinking of a number betweem 1-20. Can you guess it?  You have four tries...');
       console.log('Let\'s have some fun!  I am thinking of a number between 1-20. Can you guess it? You have four tries...' + faveNum);
       var myNum = 6
       faveNum = parseInt(faveNum);
       for(var i = 0; i < 4; i++){
       if (faveNum === myNum) {
           alert('Nice work! That is correct' + userName);
        console.log('That is correct:' + faveNum);
        break;
       }else if (faveNum < myNum){
           faveNum = prompt ('Think a little higher...');
           faveNum = parseInt(faveNum);
        console.log('Too low:' + faveNum);
       }else  {
           faveNum = prompt ('Wow! Aiming too high! Try a little less.');
           faveNum = parseInt(faveNum);
       }
        console.log('Too high:' + faveNum);
    }
        /*Different Jobs Question
        var ranodomJobs = ['doorman', 'bartender', ice-cream truck driver', 'grocery store checker'];
        var answeredCorrectly = false
        var guessCounter = 6;

        do{
            var jobAnswer = prompt('What are four random jobs Xochil has worked) 
        }
        
        */