let users=[
    {
        name:"Imanvellani",
        place:"Chennai",
        dep:"Web Developer / Web Designer",
        online:true,
        profile:"img1.jpg",
        skills:["HTML/CSS","Javascript","PHP","React","Angular","Tailwings"]
    },
    {
        name:"ms marvel",
        place:"New jercy",
        dep:"Application Developer",
        online:false,
        profile:"img2.jpeg",
        skills:["XML","Java","PHP","SQL","AndroidStudio","Flutter","DBMS"]
    },
    {
        name:"Angel",
        place:"Haven",
        dep:"Life Developer",
        online:true,
        profile:"img3.jpg",
        skills:["XML","Java","PHP","SQL","AndroidStudio","Flutter","DBMS","CSS","Python","Django"]
    }
]
function User(props){
    return <div className="cardbody">
        <span className={props.online?"line online":"line offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.pro} alt="" />
        <h3 className="username">{props.name}</h3>
        <h3 className="userplace">{props.place}</h3>
        <p className="department">{props.dep}</p>
        <div>
            <button className="message">Message</button>
            <button className="following outline">Following</button>
        </div>
        <div className="listofskills">
            <div className="skills">SKILLS :</div>
        <ul className="allskills">
            {(props.skills).map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))}
        </ul>
        </div>
    </div>
}
export const Card_Components = () => {
  return (
    <>
    {users.map((us , index)=>(
        <User key={index} online={us.online} name={us.name} pro={us.profile} place={us.place} dep={us.dep} skills={us.skills}/>
    ))}
    </>
  );
}
