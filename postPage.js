function commentBtnHandler() {


    var value = document.getElementById('textArea').value;
    
    var template = '<div class="comment">' + value + '</div>';

    document.getElementById('commentBox').innerHTML += template;
    
    document.getElementById('textArea').value = '';
}
var flag = false;

function editBtnHandler() {

    if(flag == false){
        flag = true
        document.getElementById("Editbtn").innerHTML = 'Save  &#9745;'
        document.getElementById('mainHeading').setAttribute('contenteditable', true);
        document.getElementById('authorSpan').setAttribute('contenteditable', true);
        document.getElementById('actualContent').setAttribute('contenteditable', true);
        document.getElementById('mainHeading').style.border = '1px solid black';
        document.getElementById('authorSpan').style.border = '1px solid black';
        document.getElementById('actualContent').style.border = '1px solid black';
    }else{
        flag = false;
        document.getElementById("Editbtn").innerHTML = 'Edit  &#9745;'
        document.getElementById('mainHeading').setAttribute('contenteditable', false);
        document.getElementById('authorSpan').setAttribute('contenteditable', false);
        document.getElementById('actualContent').setAttribute('contenteditable', false);
        document.getElementById('mainHeading').style.border = 'none';
        document.getElementById('authorSpan').style.border = 'none';
        document.getElementById('actualContent').style.border = 'none';
    }
    
}

var counter = 1;
function likeBtnHandler() {
    console.log('function is working');
    counter++;
    document.getElementById("Likes").innerText = counter + ' people like this!'; 
} 
