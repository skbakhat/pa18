
 import './colaborating.css';
 import cloudbees1 from '../assets/cloudbees1.png'
 import cloudbees2 from '../assets/cloudbees2.png'
 import cloudbees3 from '../assets/cloudbees3.png'
 import cloudbees4 from '../assets/cloudbees4.png'
 import cloudbees5 from '../assets/cloudbees5.png'
 import cloudbees6 from '../assets/cloudbees6.png'
 import cloudbees7 from '../assets/cloudbees7.png'

function Colaborating(){
    return(
        <>
        <div className="collMain">
<h5>We thank the following organizations for their major commitments to support the Jenkins project.</h5>
<div className="imgMain">
<img src={cloudbees1} alt="Logo" />
<img src={cloudbees2} alt="Logo" />
<img src={cloudbees3} alt="Logo" />
<img src={cloudbees4} alt="Logo" />
<img src={cloudbees5} alt="Logo" />
<img src={cloudbees6} alt="Logo" />
<img src={cloudbees7} alt="Logo" />
</div>
</div>

<div className="collMain">
    <h5>We thank the following organizations for their support of the Jenkins project
     through free and/or open source licensing programs.
    </h5>
    <div className="collMian2">
        <ul>
            <li><a href="#">Atlassian </a></li>
            <li><a href="#">Datadog </a></li>
            <li><a href="#">Mac Cloud </a></li>
            <li><a href="#">Sentry </a></li>
            <li><a href="#">XMission </a></li>
            <li><a href="#">Tsinghua University </a></li>
            <li><a href="#">Fastly </a></li>
            <li><a href="#">SpinUp </a></li>
            <li><a href="#">IBM </a></li>
            
        </ul>
    </div>
</div>
</> 
    )
}

export default Colaborating;