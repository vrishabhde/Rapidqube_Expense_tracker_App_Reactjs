export const getCurrentSimpleDateTime = (stamp)=>{
    let dt=new Date(stamp);
          let dd=("0"+(dt.getDate())).slice(-2);
          let mm=("0"+(dt.getMonth()+1)).slice(-2);
          let yy=dt.getFullYear();
          let nHH=dt.getHours();
          let hh=("0"+(nHH)).slice(-2);
          let MM=("0"+(dt.getMinutes())).slice(-2);
          let SS=("0"+(dt.getSeconds())).slice(-2);
      
          return yy + '-' + mm + '-' + dd + 'T' + hh + ':' + MM + ':' + SS;
  }

 