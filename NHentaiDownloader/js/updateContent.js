chrome.storage.sync.get({displayCheckbox:!0},(function(e){chrome.storage.local.get({allIds:[]},(function(t){if(e.displayCheckbox){let e=/\/g\/([0-9]+)\//g,c=document.getElementsByClassName("caption"),l=0;do{let c=e.exec(document.documentElement.innerHTML);document.getElementById(c[1]).checked=t.allIds.includes(c[1]),l++}while(l<c.length)}}))}));