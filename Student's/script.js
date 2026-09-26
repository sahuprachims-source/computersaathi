const CATS=["Computer Basics","Keyboard","Mouse","Files & Folders","Internet","Digital Safety"];
const QUESTIONS={
 pre:[
  {cat:"Computer Basics",q:"What is a computer?",opts:["A machine that helps us do work","A type of food","A kind of animal","A story book"],correct:0},
  {cat:"Computer Basics",q:"What does a monitor do?",opts:["Shows pictures and words","Makes food","Cleans the room","Plays only sound"],correct:0},
  {cat:"Keyboard",q:"What is the keyboard used for?",opts:["Typing letters and numbers","Playing music","Taking photos","Washing clothes"],correct:0},
  {cat:"Keyboard",q:"What does the Spacebar do?",opts:["Adds a space between words","Deletes all text","Saves the file","Turns off the computer"],correct:0},
  {cat:"Mouse",q:"What is a mouse used for?",opts:["Pointing and clicking on screen","Typing words","Printing paper","Playing sound"],correct:0},
  {cat:"Mouse",q:"What does clicking mean?",opts:["Pressing the mouse button","Shaking the mouse","Throwing the mouse","Painting with the mouse"],correct:0},
  {cat:"Files & Folders",q:"What is a folder used for?",opts:["Keeping files organized","Playing games","Making sound","Cooking food"],correct:0},
  {cat:"Files & Folders",q:"Why do we save files?",opts:["So we don't lose our work","To make the computer slow","To delete our work","To turn off the computer"],correct:0},
  {cat:"Internet",q:"What is a browser?",opts:["A program used to open websites","A type of mouse","A kind of folder","A printer"],correct:0},
  {cat:"Internet",q:"What is a website?",opts:["A page you can visit on the internet","A type of keyboard","A folder on your desk","A game console"],correct:0},
  {cat:"Digital Safety",q:"Should you share your password with strangers?",opts:["No, never","Yes, always","Only on Mondays","Yes, if they ask nicely"],correct:0},
  {cat:"Digital Safety",q:"Why should we keep personal information safe?",opts:["To protect ourselves online","It doesn't matter","To make friends faster","To play more games"],correct:0}
 ],
 mid:[
  {cat:"Computer Basics",q:"Which computer part shows information you can see?",opts:["Monitor","Chair","Bag","Bottle"],correct:0},
  {cat:"Computer Basics",q:"A laptop is a type of ____.",opts:["Computer","Fruit","Animal","Furniture"],correct:0},
  {cat:"Keyboard",q:"What happens when you press Enter?",opts:["Moves to a new line","Turns off the screen","Deletes a word","Opens the internet"],correct:0},
  {cat:"Keyboard",q:"What does Backspace do?",opts:["Removes the letter before the cursor","Adds a picture","Saves your work","Closes the window"],correct:0},
  {cat:"Mouse",q:"What does double-click mean?",opts:["Clicking two times quickly","Clicking once slowly","Holding the button down","Shaking the mouse"],correct:0},
  {cat:"Mouse",q:"What is scrolling used for?",opts:["Moving up and down a page","Turning off the computer","Saving files","Typing text"],correct:0},
  {cat:"Files & Folders",q:"What does Save mean?",opts:["Keeping your work safely on the computer","Deleting your work","Printing your work","Closing the computer"],correct:0},
  {cat:"Files & Folders",q:"How do we keep files organized?",opts:["Put them in folders","Leave them anywhere","Delete them all","Never save them"],correct:0},
  {cat:"Internet",q:"What is a search engine?",opts:["A tool to find information online","A tool to print papers","A tool to delete files","A tool to turn off the computer"],correct:0},
  {cat:"Internet",q:"How do we search for information online?",opts:["Type words into a search engine","Shake the mouse","Press Caps Lock","Unplug the computer"],correct:0},
  {cat:"Digital Safety",q:"What should you do if you see a strange link?",opts:["Do not click it and tell an adult","Click it right away","Share it with everyone","Save it as a file"],correct:0},
  {cat:"Digital Safety",q:"Is it safe to tell your password to a new online friend?",opts:["No","Yes","Sometimes","Only if they say please"],correct:0}
 ],
 post:[
  {cat:"Computer Basics",q:"You want to watch a video on the computer. Where will you see it?",opts:["Monitor screen","Keyboard","Mouse","CPU box"],correct:0},
  {cat:"Computer Basics",q:"Your friend says a laptop can be carried anywhere. A laptop is a...?",opts:["Computer","Phone","Radio","Fan"],correct:0},
  {cat:"Keyboard",q:"You typed a wrong letter. Which key removes it?",opts:["Backspace","Enter","Shift","Spacebar"],correct:0},
  {cat:"Keyboard",q:"You want ALL CAPITAL LETTERS while typing. Which key helps?",opts:["Caps Lock","Enter","Tab","Spacebar"],correct:0},
  {cat:"Mouse",q:"You want to open a folder quickly. What do you do?",opts:["Double-click it","Single-click and wait","Shake the mouse","Press Enter only"],correct:0},
  {cat:"Mouse",q:"You want to see more of a long page. What do you do?",opts:["Scroll down","Close the browser","Turn off the monitor","Unplug the mouse"],correct:0},
  {cat:"Files & Folders",q:"You finished your work and want to keep it. What should you do?",opts:["Save the file","Close without saving","Turn off the computer","Delete the file"],correct:0},
  {cat:"Files & Folders",q:"You have many files. How can you find them easily later?",opts:["Put them in named folders","Leave them scattered","Delete some randomly","Rename the computer"],correct:0},
  {cat:"Internet",q:"You want to know about elephants. What should you do?",opts:["Search for it on the internet","Turn off the computer","Delete a file","Press Backspace"],correct:0},
  {cat:"Internet",q:"You want to visit a page about your school online. What do you open first?",opts:["A web browser","A folder","A calculator","Paint"],correct:0},
  {cat:"Digital Safety",q:"Someone online asks for your home address. What should you do?",opts:["Do not share it and tell a trusted adult","Share it right away","Ignore and keep chatting","Give a fake address only"],correct:0},
  {cat:"Digital Safety",q:"You get a strange link from someone you don't know. What do you do?",opts:["Do not click it and tell an adult","Click it to see what it is","Forward it to friends","Reply asking for more links"],correct:0}
 ]
};
const STAGE_INFO={
 pre:{label:"Let's See What You Know",desc:"This test helps us understand what you already know about computers."},
 mid:{label:"Let's Check What You Learned",desc:"This test helps us see what you have learned so far."},
 post:{label:"Final Computer Check",desc:"This test helps us see how much you learned."}
};
const ADMIN_PASS="admin123";
const DB_KEY="csaathi_db_v1";
function loadDB(){
  try{const d=JSON.parse(localStorage.getItem(DB_KEY));if(d)return d;}catch(e){}
  return {students:[],settings:{pre:true,mid:false,post:false},results:{}};
}
function saveDB(db){localStorage.setItem(DB_KEY,JSON.stringify(db));}
let db=loadDB();
let S={view:"home",studentId:null,adminOn:false,stage:null,qs:[],idx:0,answers:[],adminTab:"overview",detailId:null};

function shuffle(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function prepQuestions(stage){
  return QUESTIONS[stage].map(q=>{
    const opts=q.opts.map((t,i)=>({t,orig:i}));
    const shuf=shuffle(opts);
    return {cat:q.cat,q:q.q,options:shuf.map(o=>o.t),correctIndex:shuf.findIndex(o=>o.orig===q.correct)};
  });
}
function el(html){const d=document.createElement("div");d.innerHTML=html;return d.firstElementChild;}
function render(){
  const app=document.getElementById("app");
  app.innerHTML="";
  app.appendChild(views[S.view]());
}
const views={};

views.home=function(){
  return el(`<div class="center" style="padding-top:40px">
    <div class="logo">🖥️ Computer Saathi</div>
    <div class="sub">Learn. Practice. Grow.</div>
    <div class="card" style="max-width:480px;margin:0 auto 24px;">
      <p>Computer Saathi helps children learn basic computer skills and helps teachers understand their learning progress.</p>
      <div class="big-btns">
        <button class="btn btn-blue" onclick="go('studentLogin')">👦 Student Login</button>
        <button class="btn btn-outline" onclick="go('adminLogin')">👩‍🏫 Teacher Login</button>
      </div>
    </div>
  </div>`);
};

views.studentLogin=function(){
  const v=el(`<div class="card" style="max-width:420px;margin:60px auto;">
    <h2 class="center">Student Login</h2>
    <label>Enter your Student ID</label>
    <input id="sid" placeholder="e.g. STU001">
    <div id="err" class="small" style="color:var(--red)"></div>
    <div class="center"><button class="btn btn-green" id="goBtn">Start</button></div>
    <div class="center"><button class="btn btn-outline" onclick="go('home')">Back</button></div>
  </div>`);
  v.querySelector("#goBtn").onclick=()=>{
    const id=v.querySelector("#sid").value.trim();
    const stu=db.students.find(s=>s.student_id.toLowerCase()===id.toLowerCase());
    if(!stu){v.querySelector("#err").textContent="Student ID not found. Ask your teacher.";return;}
    S.studentId=stu.student_id;go("studentHome");
  };
  return v;
};

views.studentHome=function(){
  const stu=db.students.find(s=>s.student_id===S.studentId);
  const res=db.results[S.studentId]||{};
  const stages=["pre","mid","post"];
  const rows=stages.map(st=>{
    const enabled=db.settings[st];
    const done=res[st];
    let btn;
    if(done)btn=`<span class="small">✅ Completed: ${done.score}/${done.total}</span>`;
    else if(enabled)btn=`<button class="btn btn-blue" onclick="startTest('${st}')">Start</button>`;
    else btn=`<span class="small">🔒 Not available yet</span>`;
    return `<div class="card"><h3>${STAGE_INFO[st].label}</h3><p class="small">${STAGE_INFO[st].desc}</p>${btn}</div>`;
  }).join("");
  const v=el(`<div>
    <div class="topbar"><h2>Hi, ${stu.name}! 👋</h2><button class="btn btn-outline" onclick="logout()">Logout</button></div>
    ${rows}
    <div class="center"><button class="btn btn-yellow" onclick="go('progress')">📈 My Progress</button></div>
  </div>`);
  return v;
};

function startTest(stage){
  S.stage=stage;S.qs=prepQuestions(stage);S.idx=0;S.answers=new Array(S.qs.length).fill(null);go("test");
}

views.test=function(){
  const q=S.qs[S.idx];
  const total=S.qs.length;
  const pct=Math.round(((S.idx)/total)*100);
  const optsHtml=q.options.map((o,i)=>`<button class="opt ${S.answers[S.idx]===i?'selected':''}" onclick="selectAns(${i})">${o}</button>`).join("");
  const isLast=S.idx===total-1;
  const v=el(`<div class="card">
    <div class="cat-pill">${q.cat}</div>
    <div class="small">Question ${S.idx+1} of ${total}</div>
    <div class="progressbar"><div style="width:${pct}%"></div></div>
    <div class="q-text">${q.q}</div>
    <div id="opts">${optsHtml}</div>
    <div class="nav-row">
      <button class="btn btn-outline" ${S.idx===0?"disabled":""} onclick="prevQ()">Previous</button>
      ${isLast?`<button class="btn btn-green" onclick="confirmSubmit()">Submit Test</button>`:`<button class="btn btn-blue" onclick="nextQ()">Next</button>`}
    </div>
  </div>`);
  return v;
};
function selectAns(i){S.answers[S.idx]=i;render();}
function nextQ(){if(S.idx<S.qs.length-1){S.idx++;render();}}
function prevQ(){if(S.idx>0){S.idx--;render();}}
function confirmSubmit(){
  const modal=el(`<div class="modal-bg"><div class="modal">
    <h3>Are you sure you want to finish the test?</h3>
    <button class="btn btn-green" id="yesB">Yes, Submit</button>
    <button class="btn btn-outline" id="noB">Go Back</button>
  </div></div>`);
  modal.querySelector("#yesB").onclick=()=>{submitTest();};
  modal.querySelector("#noB").onclick=()=>{modal.remove();};
  document.getElementById("app").appendChild(modal);
}
function submitTest(){
  const catScores={};CATS.forEach(c=>catScores[c]={correct:0,total:0});
  let correct=0;
  S.qs.forEach((q,i)=>{
    catScores[q.cat].total++;
    if(S.answers[i]===q.correctIndex){correct++;catScores[q.cat].correct++;}
  });
  const total=S.qs.length;
  if(!db.results[S.studentId])db.results[S.studentId]={};
  db.results[S.studentId][S.stage]={score:correct,total,catScores,date:new Date().toISOString().slice(0,10)};
  saveDB(db);
  S.lastResult={score:correct,total};
  go("result");
}

views.result=function(){
  const r=S.lastResult;
  const pct=Math.round((r.score/r.total)*100);
  const good=pct>=60;
  const msg=good?"Good job! Keep learning! 🎉":"Good try! Keep practicing. You are learning! 💪";
  const v=el(`<div class="card center" style="max-width:420px;margin:40px auto;">
    <h2>Your Result</h2>
    <div style="font-size:2.4rem;font-weight:800;color:var(--blue-d);margin:10px 0;">${r.score} / ${r.total}</div>
    <div class="small">${pct}% correct</div>
    <div class="msg">${msg}</div>
    <p class="small">Correct answers: ${r.score} &nbsp;|&nbsp; Wrong answers: ${r.total-r.score}</p>
    <button class="btn btn-blue" onclick="go('studentHome')">Continue</button>
  </div>`);
  return v;
};

views.progress=function(){
  const res=db.results[S.studentId]||{};
  const stu=db.students.find(s=>s.student_id===S.studentId);
  const pre=res.pre?res.pre.score:null, mid=res.mid?res.mid.score:null, post=res.post?res.post.score:null;
  const improvement=(pre!==null&&post!==null)?(post-pre):null;
  function barRow(label,val,total){
    if(val===null)return `<div class="bar-row"><div style="width:70px">${label}</div><div class="bar-track"></div><div class="small">Not taken</div></div>`;
    const pct=Math.round((val/total)*100);
    return `<div class="bar-row"><div style="width:70px">${label}</div><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div><div class="small">${val}/${total}</div></div>`;
  }
  const v=el(`<div class="card" style="max-width:500px;margin:30px auto;">
    <h2>My Computer Learning</h2>
    ${barRow("Pre-Test",pre,12)}
    ${barRow("Mid-Test",mid,12)}
    ${barRow("Post-Test",post,12)}
    ${improvement!==null?`<div class="msg" style="color:var(--green)">Your learning progress: ${improvement>=0?'+':''}${improvement} points 🎉</div>`:`<div class="small">Complete more tests to see your progress!</div>`}
    <button class="btn btn-outline" onclick="go('studentHome')">Back</button>
  </div>`);
  return v;
};

function logout(){S.studentId=null;go("home");}

// ---------- ADMIN ----------
views.adminLogin=function(){
  const v=el(`<div class="card" style="max-width:400px;margin:60px auto;">
    <h2 class="center">Teacher Login</h2>
    <label>Password</label>
    <input id="pw" type="password">
    <div id="err" class="small" style="color:var(--red)"></div>
    <div class="center"><button class="btn btn-green" id="lb">Login</button></div>
    <div class="center"><button class="btn btn-outline" onclick="go('home')">Back</button></div>
  </div>`);
  v.querySelector("#lb").onclick=()=>{
    if(v.querySelector("#pw").value===ADMIN_PASS){S.adminOn=true;S.adminTab="overview";go("adminDash");}
    else v.querySelector("#err").textContent="Wrong password. (Hint: admin123)";
  };
  return v;
};

function avg(arr){return arr.length?Math.round((arr.reduce((a,b)=>a+b,0)/arr.length)*10)/10:0;}

views.adminDash=function(){
  const tabs=["overview","students","settings","batch"];
  const tabNames={overview:"Overview",students:"Students",settings:"Test Settings",batch:"Batch Analytics"};
  const tabBtns=tabs.map(t=>`<div class="tab ${S.adminTab===t?'active':''}" onclick="setAdminTab('${t}')">${tabNames[t]}</div>`).join("");
  const wrap=el(`<div>
    <div class="topbar"><h2>Teacher Dashboard</h2><button class="btn btn-outline" onclick="adminLogout()">Logout</button></div>
    <div class="tabs">${tabBtns}</div>
    <div id="tabBody"></div>
  </div>`);
  wrap.querySelector("#tabBody").appendChild(adminTabs[S.adminTab]());
  return wrap;
};
function setAdminTab(t){S.adminTab=t;render();}
function adminLogout(){S.adminOn=false;go("home");}

const adminTabs={};
adminTabs.overview=function(){
  const students=db.students;
  const pres=students.map(s=>db.results[s.student_id]?.pre?.score).filter(x=>x!==undefined);
  const posts=students.map(s=>db.results[s.student_id]?.post?.score).filter(x=>x!==undefined);
  const testsCompleted=students.reduce((n,s)=>{const r=db.results[s.student_id]||{};return n+["pre","mid","post"].filter(k=>r[k]).length;},0);
  const impPairs=students.map(s=>{const r=db.results[s.student_id]||{};return (r.pre&&r.post)?(r.post.score-r.pre.score):null;}).filter(x=>x!==null);
  return el(`<div>
    <div class="cards-row">
      <div class="stat-card"><div class="stat-num">${students.length}</div><div class="stat-lbl">Total Students</div></div>
      <div class="stat-card"><div class="stat-num">${testsCompleted}</div><div class="stat-lbl">Tests Completed</div></div>
      <div class="stat-card"><div class="stat-num">${avg(pres)}/12</div><div class="stat-lbl">Avg Pre-Test</div></div>
      <div class="stat-card"><div class="stat-num">${avg(posts)}/12</div><div class="stat-lbl">Avg Post-Test</div></div>
      <div class="stat-card"><div class="stat-num">${impPairs.length?(avg(impPairs)>=0?'+':'')+avg(impPairs):'—'}</div><div class="stat-lbl">Avg Improvement</div></div>
    </div>
    <button class="btn btn-yellow" onclick="exportCSV()">⬇️ Export Results (CSV)</button>
  </div>`);
};

adminTabs.students=function(){
  const rows=db.students.map(s=>{
    const r=db.results[s.student_id]||{};
    const imp=(r.pre&&r.post)?(r.post.score-r.pre.score):"—";
    return `<tr onclick="viewStudent('${s.student_id}')">
      <td>${s.name} <span class="small">(${s.student_id})</span></td>
      <td>${r.pre?r.pre.score+'/12':'—'}</td>
      <td>${r.mid?r.mid.score+'/12':'—'}</td>
      <td>${r.post?r.post.score+'/12':'—'}</td>
      <td>${imp}</td>
    </tr>`;
  }).join("");
  const v=el(`<div>
    <button class="btn btn-blue" onclick="go('addStudent')">➕ Add Student</button>
    <table><thead><tr><th>Student</th><th>Pre</th><th>Mid</th><th>Post</th><th>Improve</th></tr></thead>
    <tbody>${rows||'<tr><td colspan=5 class="small">No students yet.</td></tr>'}</tbody></table>
  </div>`);
  return v;
};

views.addStudent=function(){
  const v=el(`<div class="card" style="max-width:480px;margin:20px auto;">
    <h2>Add Student</h2>
    <label>Student ID</label><input id="f_id">
    <label>Name</label><input id="f_name">
    <label>Age</label><input id="f_age" type="number">
    <label>Class</label><input id="f_class">
    <label>NGO / Center Name</label><input id="f_center">
    <label>Batch</label><input id="f_batch">
    <div id="err" class="small" style="color:var(--red)"></div>
    <div class="center">
      <button class="btn btn-green" id="saveB">Save Student</button>
      <button class="btn btn-outline" onclick="go('adminDash')">Cancel</button>
    </div>
  </div>`);
  v.querySelector("#saveB").onclick=()=>{
    const id=v.querySelector("#f_id").value.trim();
    const name=v.querySelector("#f_name").value.trim();
    if(!id||!name){v.querySelector("#err").textContent="Student ID and Name are required.";return;}
    if(db.students.find(s=>s.student_id.toLowerCase()===id.toLowerCase())){v.querySelector("#err").textContent="This Student ID already exists.";return;}
    db.students.push({student_id:id,name,age:v.querySelector("#f_age").value,class:v.querySelector("#f_class").value,
      center:v.querySelector("#f_center").value,batch:v.querySelector("#f_batch").value,created_at:new Date().toISOString().slice(0,10)});
    saveDB(db);S.adminTab="students";go("adminDash");
  };
  return v;
};

function viewStudent(id){S.detailId=id;go("studentDetail");}
views.studentDetail=function(){
  const s=db.students.find(x=>x.student_id===S.detailId);
  const r=db.results[S.detailId]||{};
  const catRows=CATS.map(c=>{
    function cell(stage){const cs=r[stage]?.catScores?.[c];return cs?`${cs.correct}/${cs.total}`:'—';}
    return `<tr><td>${c}</td><td>${cell('pre')}</td><td>${cell('mid')}</td><td>${cell('post')}</td></tr>`;
  }).join("");
  const v=el(`<div>
    <button class="btn btn-outline" onclick="go('adminDash')">← Back</button>
    <div class="card">
      <h2>${s.name}</h2>
      <p class="small">ID: ${s.student_id} • Class: ${s.class||'—'} • Batch: ${s.batch||'—'} • Center: ${s.center||'—'}</p>
      <h3>Test Results</h3>
      <p>Pre-Test: ${r.pre?r.pre.score+'/12':'Not taken'} &nbsp; Mid-Test: ${r.mid?r.mid.score+'/12':'Not taken'} &nbsp; Post-Test: ${r.post?r.post.score+'/12':'Not taken'}</p>
      <h3>Skill-wise Results</h3>
      <table><thead><tr><th>Skill</th><th>Pre</th><th>Mid</th><th>Post</th></tr></thead><tbody>${catRows}</tbody></table>
      <p class="small">This shows which topics ${s.name} may need more practice in.</p>
    </div>
  </div>`);
  return v;
};

adminTabs.settings=function(){
  const v=el(`<div class="card">
    <h3>Enable / Disable Tests</h3>
    <p class="small">Turn a test on when your students are ready to take it.</p>
    ${["pre","mid","post"].map(st=>`
      <div class="nav-row"><div><b>${STAGE_INFO[st].label}</b></div>
      <button class="btn ${db.settings[st]?'btn-green':'btn-outline'}" onclick="toggleStage('${st}')">${db.settings[st]?'Enabled ✅':'Enable'}</button></div>
    `).join("<hr style='border:none;border-top:1px solid #eee'>")}
  </div>`);
  return v;
};
function toggleStage(st){db.settings[st]=!db.settings[st];saveDB(db);render();}

adminTabs.batch=function(){
  const students=db.students;
  function stageAvg(st){return avg(students.map(s=>db.results[s.student_id]?.[st]?.score).filter(x=>x!==undefined));}
  const improved=students.filter(s=>{const r=db.results[s.student_id];return r&&r.pre&&r.post&&r.post.score>r.pre.score;}).length;
  const same=students.filter(s=>{const r=db.results[s.student_id];return r&&r.pre&&r.post&&r.post.score===r.pre.score;}).length;
  const lower=students.filter(s=>{const r=db.results[s.student_id];return r&&r.pre&&r.post&&r.post.score<r.pre.score;}).length;
  const catAvgRows=CATS.map(c=>{
    function ca(st){const vals=students.map(s=>{const cs=db.results[s.student_id]?.[st]?.catScores?.[c];return cs?Math.round(cs.correct/cs.total*100):null;}).filter(x=>x!==null);return vals.length?avg(vals)+'%':'—';}
    return `<tr><td>${c}</td><td>${ca('pre')}</td><td>${ca('mid')}</td><td>${ca('post')}</td></tr>`;
  }).join("");
  const v=el(`<div>
    <div class="cards-row">
      <div class="stat-card"><div class="stat-num">${students.length}</div><div class="stat-lbl">Students</div></div>
      <div class="stat-card"><div class="stat-num">${stageAvg('pre')}/12</div><div class="stat-lbl">Avg Pre</div></div>
      <div class="stat-card"><div class="stat-num">${stageAvg('mid')}/12</div><div class="stat-lbl">Avg Mid</div></div>
      <div class="stat-card"><div class="stat-num">${stageAvg('post')}/12</div><div class="stat-lbl">Avg Post</div></div>
    </div>
    <div class="card">
      <h3>Skill-wise Average (% correct)</h3>
      <table><thead><tr><th>Skill</th><th>Pre</th><th>Mid</th><th>Post</th></tr></thead><tbody>${catAvgRows}</tbody></table>
    </div>
    <div class="card">
      <h3>Student Movement</h3>
      <p>✅ Improved: ${improved} &nbsp; ➖ Stayed the same: ${same} &nbsp; ⚠️ Needs more practice: ${lower}</p>
    </div>
  </div>`);
  return v;
};

function exportCSV(){
  const header=["Student ID","Student Name","Pre-Test","Mid-Test","Post-Test","Improvement",...CATS];
  const rows=db.students.map(s=>{
    const r=db.results[s.student_id]||{};
    const imp=(r.pre&&r.post)?(r.post.score-r.pre.score):"";
    const catCells=CATS.map(c=>{
      const cs=r.post?.catScores?.[c]||r.mid?.catScores?.[c]||r.pre?.catScores?.[c];
      return cs?`${cs.correct}/${cs.total}`:"";
    });
    return [s.student_id,s.name,r.pre?r.pre.score:"",r.mid?r.mid.score:"",r.post?r.post.score:"",imp,...catCells];
  });
  const csv=[header,...rows].map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(",")).join("\n");
  try{
    const blob=new Blob([csv],{type:"text/csv"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);a.download="computer_saathi_results.csv";
    document.body.appendChild(a);a.click();a.remove();
  }catch(e){
    // Fallback if the download is blocked (e.g. inside a sandboxed preview):
    // open the CSV as text in a new tab so it can be saved manually.
    const w=window.open("","_blank");
    if(w){w.document.write("<pre>"+csv.replace(/</g,"&lt;")+"</pre>");}
    else{alert("Download blocked. Please open this file outside the preview (download it, then open in your browser) and try Export again.");}
  }
}

function go(view){S.view=view;render();}
render();