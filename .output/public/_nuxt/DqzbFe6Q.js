const c=async o=>{try{const e=await o.validate();return Promise.resolve(e)}catch(e){return Object.keys(e).forEach((t,r)=>{const s=document.getElementsByClassName("is-error");r==0&&s[r].scrollIntoView({block:"center",behavior:"smooth"})}),Promise.reject(e)}};export{c as V};