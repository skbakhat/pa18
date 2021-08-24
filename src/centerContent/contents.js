import Cardd from "../comComponents/cardd/cardd";
import "./contentsStyle.css";

function Contents() {
  return (
    <div className="styling">
      <Cardd
        head="Continuous Integration and Continuous Delivery"
        content="As an extensible automation server, Jenkins can be used as a 
simple CI server or turned into the continuous delivery hub for any project."
      />

      <Cardd head="Easy installation" 
        content="Jenkins is a self-contained Java-based program, ready to run out-of-the-box,
         with packages for Windows, Linux, macOS and other Unix-like operating systems."
      />
      <Cardd head="Easy configuration"
      content="Jenkins can be easily set up and configured via its web interface,
       which includes on-the-fly error checks and built-in help." 

       />

       <Cardd head="Plugins" 
         content="With hundreds of plugins in the Update Center, Jenkins integrates with practically
          every tool in the continuous integration and continuous delivery toolchain."
       />
       <Cardd head="Extensible" 
         content="Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities 
         for what Jenkins can do."
       />
       <Cardd head="Distributed" 
       content="Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments
        across multiple platforms faster."
        />
    </div>
  );
}
export default Contents;
