export default class ModalContentProvider {
    constructor() {
      this.modalContents = {
        aboutMe: {
          title: 'About me',
          description: "My name is <b>Muhammad Ammad</b>. I am a software engineer with three years of experience, motivated by my interest in software development. I specialize as a full stack web developer, proficient in the MERN Stack, Laravel, Django and various other frameworks. Additionally, I have a strong grasp of Cloud Computing and DevOps, which I'm currently enhancing. My diverse skill set equips me to tackle a wide range of development challenges.",
        },
        projects: {
          title: 'Projects',
          description: "<ul><li><strong>Chat App</strong> - Developed using Django.</li><li><strong>Directory Listing Website</strong> - Built with Laravel.</li><li><strong>DES and Triple DES Encryption/Decryption</strong> - Implemented in Python.</li><li><strong>Mistral Web UI</strong> - Installed Ollama on a g4dn.xlarge instance on AWS and made a UI for Mistral LLM using Vanilla JavaScript.</li><li><strong>HVAC Simulator</strong> - A Three.js project that allows users to explore all the HVAC components along with functinoalities like split apart Animation and explaination of each component.</li></ul><p>In my projects, I adopt a problem-solving approach by breaking down complex issues into manageable chunks and resolving them through dry runs and iterative solutions. Currently, I'm working on an exciting HVAC system project for schools and students, featuring a 3D web model to explore components in detail.</p>",
        },
        contactMe: {
          title: 'Contact Me',
          description: '<p>Feel free to reach out via LinkedIn or email:</p><ul><li><a href="https://www.linkedin.com/in/muhammad-ammad-123630224/" target="_blank" >LinkedIn</a></li><li>Email: <a href="mailto:me.ammad1786@gmail.com" target="_blank" >me.ammad1786@gmail.com</a></li><p>You can also check out my projects on GitHub:</p><li><a href="https://github.com/DevAro178/" target="_blank" >GitHub</a></li></ul>',
        },
      }
    }
  
    getModalInfo(portalName) {
      return this.modalContents[portalName];
    }
  }
  