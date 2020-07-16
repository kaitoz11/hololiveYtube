function Idxtract(s,type){
    //type = 0 là plist = 1 là channel
    var st,ed,id='';
    if(type = 0){
        st = s.indexOf("list=")+5;
        ed = s.lastIndexOf("&");
    }else if(type = 1){
        st = s.indexOf("channel/UC")+10;
        ed = s.length;
        id = "UU";
    }else{
        alert("error")
    }
    for(var i=st;i<ed;i++){
        id+=s[i]
    }
    if(type = 1){
        s[2]
    }
    return id;
}

function getJSON(){
    var url=document.getElementById("inp").value;
    var playlistID = Idxtract(url,1);
    document.getElementById("addin").innerHTML = "<b>PlaylistID: </b>"+playlistID;
    var APIkey = "AIzaSyDMEuS163fdWrwgIAclmdm78w5lnkmR-DM";
    var numrex = "1000",pgToken = '';
    var da = "https://www.googleapis.com/youtube/v3/playlistItems?pageToken="+pgToken+"&part=snippet%2CcontentDetails&maxResults="+numrex+"&playlistId="+playlistID+"&alt=json&key="+APIkey;
    
    window.open(da, '_blank');
}