/* Skill groups (SK), legacy matrix (MX) and the categorized percentages shown in the Skills app (MXC). */
var SK=[["Cloud","AWS · Azure · GCP",["AWS Console Management","Azure Portal Management","Google Cloud Platform","AWS Lambda","OpenFaaS","Cloudflare"]],
["DevOps","Terraform · Docker · Jenkins",["Git / GitHub","Terraform","Docker","Kubernetes (Basics)","Ansible (Intermediate)","GitLab (Basics)","Jenkins","Redis","Pulumi"]],
["Languages","Python · SQL · Shell",["Python","SQL","Shell Scripting","Bash","JavaScript","Dart","Java (Basics)"]],
["Development","Web and mobile",["HTML","CSS","Tailwind CSS","JavaScript","Node.js","Express","EJS","React","Django","Flutter"]],
["Security and systems","IAM · Zero Trust",["IAM","Zero Trust","Network Security","Nmap","Linux (Ubuntu, RHEL)","Windows"]],
["Data and AI","MySQL · MongoDB · GenAI",["MySQL","MongoDB","Amazon S3","Neon","ML Fundamentals","Generative AI (LLMs)","Prompt Engineering","AI Workflow Design","MLflow"]],
["CS fundamentals","DSA · DBMS · OS · CN",["DSA","DBMS","OS","CN"]],
["Exploring next","Quantum computing",["IBM Quantum","AWS Braket"]],
["Soft skills","Communication · Collaboration",["Effective communication","Problem-solving","Time management","Critical thinking","Collaboration"]]];
var MX=[["Git / GitHub",90],["JavaScript",85],["Prompt Engineering",85],["Docker",85],["AWS S3",85],["Python",80],["SQL",80],["Node.js",80],["MySQL",80],["AWS",80],["Google Cloud",75],["Terraform",75],["Java",75],["DBMS",75],["Azure",65],["Kubernetes",65],["Jenkins",65],["Ansible",45],["DSA",35]];
var MXC=[["Programming languages","Java · Python · SQL · Shell",[["Java",75],["Python",80],["SQL",80],["Shell Scripting",70]],"lang"],
["Web and app engineering","Frontend to backend",[["HTML / CSS",75],["JavaScript",85],["Node.js",80],["Express",75]],"web"],
["Delivery and automation","DevOps · pipelines and infra",[["Git / GitHub",90],["Docker",85],["Terraform",75],["GitLab",60],["Jenkins",65],["Kubernetes",65],["Ansible",45],["Jira",85]],"devops"],
["Data and storage","Persistence layer",[["AWS S3",85],["MySQL",80],["Google Cloud SQL",75],["Neon DB",70]],"data"],
["Cloud platforms","AWS · Azure · GCP",[["AWS",80],["Microsoft Azure",65],["Google Cloud",75]],"cloud"],
["AI and ML tools","GenAI · ML",[["ML Fundamentals",65],["Generative AI",55],["Prompt Engineering",85],["AI Workflow Design",45],["MLflow",45]],"ai/ml"],
["CS fundamentals","Core systems",[["DSA",35],["DBMS",75],["OS",70],["CN",65]],"cs core"]];
