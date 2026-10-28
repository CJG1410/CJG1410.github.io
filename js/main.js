// Project data: repo / paper / demo are optional; a button renders only when its URL exists.
const PROJECTS = [
 {featured:true,kind:"Agentic RAG · Backend",title:"FastAPI Technical Documentation Assistant",
  problem:"Retrieval-augmented answers are only useful if they stay grounded in the documents. This assistant checks itself before it replies.",
  points:["LangGraph pipeline that retrieves, grades relevance, rewrites the query and regenerates the answer.","Groundedness check compares each answer to the retrieved documents and returns source metadata.","FastAPI endpoints for querying, ingestion, document management and feedback; accepts Markdown, text, HTML and URLs.","Tavily web-search fallback and a Streamlit UI with session-based conversation memory."],
  tech:["Python","FastAPI","LangGraph","Gemini","ChromaDB","Sentence Transformers","Streamlit"],
  steps:["Retrieve","Grade relevance","Rewrite query","Generate","Check groundedness"],
  repo:"https://github.com/CJG1410/fastapi-rag-assistant"},
 {featured:true,kind:"Research · IEEE published",title:"AI-Powered Digital Twin for Aircraft Engines",
  problem:"Predictive maintenance needs to estimate how much life an engine has left, and engineers need to know why the model says so.",
  points:["Machine-learning framework that estimates Remaining Useful Life (RUL) and monitors engine health.","SHAP explanations show which features drive each health and maintenance prediction.","Federated Averaging (FedAvg) simulation explores distributed training without centralising all data.","Streamlit dashboard connected to a Unity visualisation environment (Raspberry Pi in the stack)."],
  tech:["Python","Machine Learning","SHAP","Federated Learning","Streamlit","Unity","Raspberry Pi"],
  steps:["Sensor data","RUL estimate","SHAP explanation","Federated simulation","Unity twin"],
  paper:"https://ieeexplore.ieee.org/document/11375942"},
 {kind:"Deep learning · Medical imaging",title:"MediScanNet",
  problem:"Multi-stage chest X-ray classification.",
  points:["Dual-stream DenseNet121 + ResNet50 model learning complementary features.","Three-stage training on NIH ChestX-ray14, RSNA Pneumonia and CheXpert; specialist networks combined by soft voting.","PyTorch AMP and GPU Tensor Cores for faster training; Streamlit interface shows predictions and confidence."],
  tech:["PyTorch","DenseNet121","ResNet50","CUDA","Streamlit"]},
 {kind:"Machine learning · Applied",title:"Context-Aware Route Optimisation",
  problem:"Compares routes using traffic, air quality (AQI) and fuel efficiency rather than time alone.",
  points:["Random Forest regression estimates a score for each route.","Folium maps and Streamlit analytics for route comparison."],
  tech:["Scikit-learn","Random Forest","Google Maps API","Folium","Streamlit"],
  repo:"https://github.com/CJG1410/AI-Based-Context-Aware-Route-Optimization-System"}
];
const EARLIER = [
 {t:"Network Intrusion Detection with Explainable AI",d:"LIME with decision tree, MLP, random forest and XGBoost classifiers.",repo:"https://github.com/CJG1410/Network-Intrusion-Detection-System-Using-Explainable-AI-"},
 {t:"Heart Failure Prediction",d:"AI-for-healthcare model predicting heart-failure cases from clinical factors.",repo:"https://github.com/CJG1410/Heart-Failure-Prediction"},
 {t:"K-Connect",d:"Collaborative server for Karunya students using Mattermost, MySQL and Google Cloud Platform.",repo:"https://github.com/CJG1410/K-Connect"}
];
const ico={repo:"M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"};
const e=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ext='target="_blank" rel="noopener noreferrer"';
function links(p){
 const l=[];
 if(p.repo)l.push(`<a class="btn" href="${e(p.repo)}" ${ext} aria-label="View repository for ${e(p.title)} on GitHub">View repository ↗</a>`);
 if(p.paper)l.push(`<a class="btn primary" href="${e(p.paper)}" ${ext} aria-label="Read IEEE paper for ${e(p.title)}">Read IEEE paper ↗</a>`);
 if(p.demo)l.push(`<a class="btn" href="${e(p.demo)}" ${ext} aria-label="Live demo of ${e(p.title)}">Live demo ↗</a>`);
 return l.length?`<div class="links">${l.join("")}</div>`:"";
}
const body=p=>`<p class="kind">${e(p.kind)}</p><h3>${e(p.title)}</h3><p class="problem">${e(p.problem)}</p><ul>${p.points.map(x=>`<li>${e(x)}</li>`).join("")}</ul><ul class="tech" aria-label="Technologies">${p.tech.map(x=>`<li>${e(x)}</li>`).join("")}</ul>${links(p)}`;
const feats=PROJECTS.filter(p=>p.featured),rest=PROJECTS.filter(p=>!p.featured);
document.getElementById("projects").innerHTML=
 feats.map((p,i)=>`<article class="feat reveal"><div class="viz" aria-hidden="true"><span class="num">0${i+1}</span><ol>${p.steps.map((s,j)=>`<li><b>${j+1}</b>${e(s)}</li>`).join("")}</ol></div><div>${body(p)}</div></article>`).join("")+
 `<div class="gallery">${rest.map(p=>`<article class="card reveal">${body(p)}</article>`).join("")}</div>`+
 `<div class="archive"><h3>Earlier projects</h3>${EARLIER.map(p=>`<div class="arow reveal"><div><strong>${e(p.t)}</strong><p>${e(p.d)}</p></div><a href="${e(p.repo)}" ${ext} aria-label="View repository for ${e(p.t)}">Repository ↗</a></div>`).join("")}</div>`;
// nav
const nav=document.getElementById("nav"),btn=nav.querySelector(".burger"),menu=document.getElementById("menu");
btn.onclick=()=>{const o=menu.classList.toggle("open");btn.setAttribute("aria-expanded",o)};
menu.addEventListener("click",ev=>{if(ev.target.tagName==="A"){menu.classList.remove("open");btn.setAttribute("aria-expanded",false)}});
addEventListener("scroll",()=>nav.classList.toggle("stuck",scrollY>10),{passive:true});
// reveal + active link
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(n=>io.observe(n));
const links2=[...menu.querySelectorAll("a")];
const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links2.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+x.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("main section[id]").forEach(s=>so.observe(s));
