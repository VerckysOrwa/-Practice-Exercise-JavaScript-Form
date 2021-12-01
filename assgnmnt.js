const Bill=()=>{
		if (document.getElementById('same').checked){
     let shippingName =  document.getElementById('shippingName').value;
      let shippingZip = document.getElementById('shippingZip').value;
      
     document.getElementById('billingName').value = shippingName;
      document.getElementById('billingZip').value = shippingZip;
     
		}
		else{ 
			document.getElementById('billingName').value = "";
			document.getElementById('billingZip').value = "";
		}
}
