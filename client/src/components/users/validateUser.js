

const Validator = (check)=>{
    console.log(check);
    const pattern_phone = /\+\d{3}-\d{9}/
    const pattern_ip = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!check.Name){
      return alert('Please select the Name field')
    }
    const match = check.Phone.match(pattern_phone)
    if (!match || match.length===0) {
      return alert('the phone number is invalid')

    }
    if(!pattern_ip.test(check.IP)){
      return alert("the IP address is invalid")

    }
  }

  export default Validator