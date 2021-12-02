export function dateNow(){
  const date= new Date()
  const date2=date.getDate()+'/'+(Number(date.getMonth())+1)+'/'+date.getFullYear()
  return date2
}

export function timeNow(){
  const time= new Date()
  const time2=time.getHours()+':'+time.getMinutes()
  return time2
}