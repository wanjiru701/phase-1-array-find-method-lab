// code your solution here
function superbowlWin(rec){
    for(const record of rec){
        if(record.result==="W"){
            return record.year;
        }
    }
}
