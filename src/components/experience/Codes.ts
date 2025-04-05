export const listcode = `
  <span class="line"><span style="color: var(--color-slate-300)">/* Work Experience */</span></span>
  <span class="line"><span style="color: var(--color-pink-400)">import</span> <span style="color: var(--color-sky-300)">React</span> <span style="color: var(--color-pink-400)">from</span> <span style="color: var(--color-sky-300)">'react'</span>;</span>  
  <span class="line"><span style="color: var(--color-pink-400)">import</span> <span style="color: var(--color-sky-300)">workExperience</span> <span style="color: var(--color-pink-400)">from</span> <span style="color: var(--color-sky-300)">'./experience.ts'</span>;</span>  

  <span class="line"><span style="color: var(--color-pink-400)">const</span> <span style="color: var(--color-sky-300)">ExperienceList</span> <span style="color: var(--color-slate-300)">=</span> <span style="color: var(--color-sky-300)">({ experiences })</span> <span style="color: var(--color-slate-300)">=></span> <span style="color: var(--color-slate-50)"> {</span></span>  
  <span class="line"><span style="color: var(--color-pink-400)">return</span> <span style="color: var(--color-slate-50)">(</span></span>  
  <span class="line"><span style="color: var(--color-slate-50)">  &lt;div&gt;</span></span>  
  <span class="line"><span style="color: var(--color-slate-50)">    {experiences.map((experience, index) => (</span></span>  
  <span class="line"><span style="color: var(--color-slate-50)">      &lt;div key={index} className="experience"&gt;</span></span>  
          <span class="line"><span style="color: var(--color-sky-300)">&lt;h3&gt;</span> {experience.company} <span style="color: var(--color-sky-300)">&lt;/h3&gt;</span></span>  
          <span class="line"><span style="color: var(--color-sky-300)">&lt;p&gt;</span><span style="color: var(--color-slate-300)">Position:</span> {experience.position}<span style="color: var(--color-sky-300)">&lt;/p&gt;</span></span>  
          <span class="line"><span style="color: var(--color-sky-300)">&lt;p&gt;</span><span style="color: var(--color-slate-300)">Duration:</span> {experience.duration}<span style="color: var(--color-sky-300)">&lt;/p&gt;</span></span>  
          <span class="line"><span style="color: var(--color-sky-300)">&lt;p&gt;</span><span style="color: var(--color-slate-300)">Technologies:</span> {experience.technologies.join(', ')}<span style="color: var(--color-sky-300)">&lt;/p&gt;</span></span>  
          <span class="line"><span style="color: var(--color-sky-300)">&lt;p&gt;</span><span style="color: var(--color-slate-300)">Responsibilities:</span> {experience.responsibilities.join('; ')}<span style="color: var(--color-sky-300)">&lt;/p&gt;</span></span>  
  <span class="line"><span style="color: var(--color-slate-50)">      &lt;/div&gt;</span></span>  
  <span class="line"><span style="color: var(--color-slate-50)">    ))}</span></span>  
  <span class="line"><span style="color: var(--color-slate-50)">  &lt;/div&gt;</span></span>  
  <span class="line"><span style="color: var(--color-slate-50)">);</span></span>  
  <span class="line"><span style="color: var(--color-slate-50)">};</span></span>  

  <span class="line"><span style="color: var(--color-pink-400)">export default</span> <span style="color: var(--color-sky-300)">ExperienceList</span>;</span>  

  `;

export  const experiencecode = `
  <span class="line"><span style="color: var(--color-pink-400)">const</span> <span style="color: var(--color-sky-300)">workExperience</span> <span style="color: var(--color-slate-300)">=</span> <span style="color: var(--color-slate-50)">[</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">  {</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    company</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">'Tech Solutions Inc.'</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    position</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">'Frontend Developer'</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    duration</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">'2021 - Present'</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    technologies</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">['React', 'TypeScript', 'TailwindCSS']</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    responsibilities</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">[</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">      'Developed and maintained web applications using React and TypeScript',</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">      'Collaborated with designers to implement responsive UI using TailwindCSS',</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">      'Optimized application performance and ensured cross-browser compatibility'</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">    ]</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">  },</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">  {</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    company</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">'Creative Agency'</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    position</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">'UI/UX Designer'</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    duration</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">'2019 - 2021'</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    technologies</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">['Figma', 'Sketch', 'Adobe XD']</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    responsibilities</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">[</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">      'Designed user interfaces for web and mobile applications',</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">      'Conducted user research and usability testing',</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">      'Collaborated with developers to ensure design feasibility'</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">    ]</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">  },</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">  {</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    company</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">'Startup Hub'</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    position</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">'Software Engineer Intern'</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    duration</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">'2018 - 2019'</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    technologies</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">['JavaScript', 'Node.js', 'MongoDB']</span><span style="color: var(--color-slate-300)">,</span></span>
  <span class="line"><span style="color: var(--color-sky-300)">    responsibilities</span><span style="color: var(--color-slate-300)">:</span> <span style="color: var(--color-slate-50)">[</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">      'Assisted in developing backend APIs using Node.js',</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">      'Performed database operations with MongoDB',</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">      'Participated in code reviews and team meetings'</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">    ]</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">  }</span></span>
  <span class="line"><span style="color: var(--color-slate-50)">];</span></span>

  <span class="line"><span style="color: var(--color-pink-400)">export default</span> <span style="color: var(--color-sky-300)">workExperience</span>;</span>
  `;

export const cssCode = `
  <span class="line"><span style="color: var(--color-slate-300)">/* Educational Background */</span></span>
  <span class="line"><span style="color: var(--color-pink-400)">#Bachelors</span><span style="color: var(--color-slate-300)"> {</span></span>
    <span class="line"><span style="color: var(--color-sky-300)">degree</span><span style="color: var(--color-slate-300)">: </span><span style="color: var(--color-slate-50)">"Bachelor of Science in Computer Science"</span><span style="color: var(--color-slate-300)">;</span></span>
    <span class="line"><span style="color: var(--color-sky-300)">university</span><span style="color: var(--color-slate-300)">: </span><span style="color: var(--color-slate-50)">"NED University"</span><span style="color: var(--color-slate-300)">;</span></span>
    <span class="line"><span style="color: var(--color-sky-300)">graduation-year</span><span style="color: var(--color-slate-300)">: </span><span style="color: var(--color-slate-50)">2026</span><span style="color: var(--color-slate-300)">;</span></span>
  <span class="line"><span style="color: var(--color-slate-300)">}</span></span>

  <span class="line"><span style="color: var(--color-pink-400)">#Intermediate</span><span style="color: var(--color-slate-300)"> {</span></span>
    <span class="line"><span style="color: var(--color-sky-300)">degree</span><span style="color: var(--color-slate-300)">: </span><span style="color: var(--color-slate-50)">"Computer Science"</span><span style="color: var(--color-slate-300)">;</span></span>
    <span class="line"><span style="color: var(--color-sky-300)">university</span><span style="color: var(--color-slate-300)">: </span><span style="color: var(--color-slate-50)">"Govt. National College"</span><span style="color: var(--color-slate-300)">;</span></span>
    <span class="line"><span style="color: var(--color-sky-300)">graduation-year</span><span style="color: var(--color-slate-300)">: </span><span style="color: var(--color-slate-50)">2022</span><span style="color: var(--color-slate-300)">;</span></span>
  <span class="line"><span style="color: var(--color-slate-300)">}</span></span>
    `;

export const terminalOutput = `
  <span class="line not-last:opacity-40"><span class="animate-flash-code"><span class="text-green-300" aria-hidden="true">hamza_portfolio</span><span aria-label="Folder"> $ </span><span class="text-purple-300">npm run dev</span></span></span>
  <span class="line not-last:opacity-40"><span class="animate-flash-code"><span>Starting the development server...</span></span></span>
  <span class="line not-last:opacity-40"><span class="animate-flash-code"><span>✔</span><span class="text-green-300"> Vite</span><span> dev server running at:</span></span></span>
  <span class="line not-last:opacity-40"><span class="animate-flash-code"><span>  ➜  Local: </span><span class="text-sky-300">http://localhost:3000/</span></span></span>
  <span class="line not-last:opacity-40"><span class="animate-flash-code"><span>  ➜  Network: </span><span class="text-sky-300">http://192.168.1.100:3000/</span></span></span>
  <span class="line not-last:opacity-40"><span class="animate-flash-code"><span>Ready in </span><span class="text-sky-300">123ms</span></span></span>
  <!-- Add more lines here -->
    `;
