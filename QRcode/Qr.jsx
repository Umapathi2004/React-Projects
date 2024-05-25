import { useState } from "react"

export const QR_Generater = () => {
    const [img,imgSet]=useState("");
    const [loading,loadingSet]=useState(false);
    const [qrvalue,qrSet]=useState("www.Youtube.com");
    const [sizevalue,setSize]=useState("150");
    async function Generator(){
        loadingSet(true)
        try{
            imgSet(`https://api.qrserver.com/v1/create-qr-code/?size=${sizevalue}x${sizevalue}&data=${encodeURIComponent(qrvalue)}`)
        }
        catch(error){
            alert(error);
        }
        finally{
            loadingSet(false)
        }
    }
    function Download(){
    fetch(img)
    .then((Response)=>Response.blob())
    .then((blob)=>{
        const link=document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download="qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild("link");
    })
    }
  return (
    <div className="qrbody">
        <div className="upperbody">
        <div className="heading">QR Generator</div>
        {loading && <p className="loading">Loading...</p>}
        {img && <img src={img} alt=""/>}
         </div>
        <label htmlFor="url">Enter URL :</label>
        <input type="url"id="url" value={qrvalue} placeholder="Enter URL..." onChange={(e)=>qrSet(e.target.value)}/>
        <label htmlFor="size">Enter Size :</label>
        <input type="number" id="size" value={sizevalue} placeholder="Enter Size of QR..." onChange={(e)=>setSize(e.target.value)}/>
        <div className="buttons">
            <button className="generater" onClick={Generator} disabled={loading}>Generate</button>
            <button className="download" onClick={Download} disabled={!img}>Download</button>
        </div>
    </div>
  )
}
