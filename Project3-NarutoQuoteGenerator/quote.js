
    var arrayOfQuotes=[
        {
    "author":"Sakura Haruno" ,
    "quote":"A smile is the easiest way out of a difficult situation"
        },
        {
    "author": "Naruto",
    "quote":"When people are protecting something truly special to them, they truly can become as strong as they can be"
        },
        {
    "author":"Naruto" ,
    "quote":"Somebody told me I’m a failure, I’ll prove them wrong"
        },
        {
    "author": "Naruto",
    "quote":"Failing doesn’t give you a reason to give up, as long as you believe"
        },
        {
    "author":"Naruto" ,
    "quote":"Don’t underestimate me! I don’t quit and I don’t run"
        },
        {
    "author":"Obito Uchiha" ,
    "quote":"The moment people come to know love, they run the risk of carrying hate"
        },
        {
    "author": "Itachi Uchiha",
    "quote":"Those who forgive themselves, and are able to accept their true nature… They are the strong ones"
        },
        {
    "author":"Jiraiya" ,
    "quote":"A place where someone still thinks about you is a place you can call home"
        },
        {
    "author": "Nagato",
    "quote":"If you don’t share someone’s pain, you can never understand them"
        },
        {
    "author":"Naruto" ,
    "quote":"Love breeds sacrifice, which in turn breeds hatred. Then you can know pain"
        },
        {
    "author": "Haku",
    "quote":"It is only through the eyes of others that our lives have any meaning"
        },
        {
    "author":"Naruto" ,
    "quote":"I care more about others than I do myself, and I won’t let anyone hurt them"
        },
        {
    "author":"Naruto" ,
    "quote":"It’s not the face that makes someone a monster, it’s the choices they make with their lives"
        },
        {
    "author":"Naruto" ,
    "quote":"While you’re alive, you need a reason for your existence. Being unable to find one is the same as being dead"
        },
        {
    "author":"Orochimaru" ,
    "quote":"It’s human nature not to realize the true value of something, unless they lose it"
        },
        {
    "author":"Naruto" ,
    "quote":"Once you question your own belief it’s over"
        },
        {
    "author":"Itachi Uchiha" ,
    "quote":"The ones who aren’t able to acknowledge their own selves are bound to fail"
        },
        {
    "author":"Orochimaru" ,
    "quote":"Either people change or they die before they do. It’s one or the other"
        },
            {
    "author":"Haku" ,
    "quote":"When people are protecting something truly precious to them. They truly can become…as strong as they need to be!"
        },
        {
    "author":"Shikamaru Nara" ,
    "quote":"Laziness is the mother of all bad habits, but ultimately she is a mother and we should respect her"
        },
        {
    "author":"jiraya" ,
    "quote":"The True measure of a shinobi is not how he Lives, But how he Dies"
        },
        {
    "author":"Rock Lee" ,
    "quote":"I was not born with a whole lot of natural talent... but I work hard and I Never Give Up. That is my Gift. That is my Ninja Way!"
        }
    ];

    function randomSelector(arrayLength){

        return Math.floor(Math.random() * arrayLength);
    }

    function generateQuote(){
        //calling the other function
        var random = randomSelector(arrayOfQuotes.length);

        document.getElementById("quotes").innerHTML = '"' + arrayOfQuotes[random].quote + '"';

        document.getElementById("author").innerHTML = '- ' + arrayOfQuotes[random].author;

    }