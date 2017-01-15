/**
 * Created by /pol/ DUTCHBRO on 15-1-2017.
 */

(function() {

    //these are the filters edit them at your leisure
    var filter =  [
        "piss",
        "ebony",
        "interacial",
        "interracial",
        "black",
        "bbc",
        "cuck"
    ];

    var porn = document.getElementsByClassName('video_box');
    var title =[];
    var degenerate;

    for(i=0;i<porn.length;i++)
    {
        title[i]=porn[i].children[1].innerText.toLowerCase();
    }
    for(i=0;i<title.length;i++){
        degenerate = false;

        for(j =0; j < filter.length; j++){
            if (title[i].includes(filter[j]) && degenerate == false){
                degenerate = true
            }
        }

        if(!degenerate) {
            porn[i].style.display = 'none';
        }
    }

    //hd only code
    for(i=0;i<porn.length;i++){
        if(porn[i].children[0].children[0].children[0].className !== 'hdIcon')
            porn[i].style.display = 'none';
    }
})();
