const placementQuestions = [
 ['Which tag marks the main content of an HTML page?', ['<main>','<side>','<div>','<head>'],0],
 ['What does RAM provide?', ['Temporary working memory','Permanent cable','Printer ink','Browser search'],0],
 ['Which is a strong account password practice?', ['Use a unique phrase and manager','Reuse one password everywhere','Share it by email','Use your birthday'],0],
 ['What does CSS control?', ['Page presentation and layout','Computer power supply','Database passwords','Chinese tones only'],0],
 ['What should you do with an AI-generated fact?', ['Verify it in reliable sources','Publish it immediately','Assume citations are genuine','Remove the context'],0],
 ['What is nǐ hǎo?', ['Hello','Good night','Thank you','Where are you?'],0],
 ['Which unit commonly represents a network address?', ['IP address','RGB value','CSS class','MP3 file'],0],
 ['Which JavaScript structure repeats instructions?', ['Loop','Font','Router','Pinyin'],0]
];
let index = 0, score = 0; const answers = Array(placementQuestions.length).fill(null);
function escapeOption(value) { return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }
function renderPlacement() {
 const [question, options] = placementQuestions[index];
 document.getElementById('placementNumber').textContent = `Question ${index + 1} of ${placementQuestions.length}`;
 document.getElementById('placementProgress').style.width = `${(index / placementQuestions.length)*100}%`;
 document.getElementById('placementQuestion').innerHTML = `<h2>${question}</h2><div class="question-options">${options.map((option,i)=>`<label><input type="radio" name="placementAnswer" value="${i}" ${answers[index]===i?'checked':''}><span>${String.fromCharCode(65+i)}. ${escapeOption(option)}</span></label>`).join('')}</div>`;
 document.getElementById('placementPrevious').disabled = index===0;
 document.getElementById('placementNext').textContent = index===placementQuestions.length-1?'Submit test':'Next';
}
document.addEventListener('DOMContentLoaded',()=>{
 renderPlacement();
 document.getElementById('placementPrevious').addEventListener('click',()=>{index=Math.max(0,index-1);renderPlacement();});
 document.getElementById('placementNext').addEventListener('click',()=>{
  const selected=document.querySelector('input[name="placementAnswer"]:checked'); if(!selected){alert('Choose one answer first.');return;} answers[index]=Number(selected.value);
  if(index===placementQuestions.length-1){score=answers.filter((answer,i)=>answer===placementQuestions[i][2]).length;const percent=Math.round(score/placementQuestions.length*100);document.getElementById('placementProgress').style.width='100%';document.getElementById('placementQuestion').style.display='none';document.querySelector('.button-row').style.display='none';document.getElementById('placementNumber').textContent='Placement complete';document.getElementById('placementResult').hidden=false;document.getElementById('placementScore').textContent=`${percent}% — ${score}/${placementQuestions.length}`;document.getElementById('placementRecommendation').textContent=percent>=75?'Recommended: Web Designing, IT, AI, or HSK intermediate paths after reviewing the course descriptions.':percent>=45?'Recommended: Web Designing fundamentals, Computer Fundamentals, AI Introduction, and HSK 1 beginner lessons.':'Recommended: Computer Fundamentals and HSK 1 beginner lessons first. Practice for two weeks before moving to advanced modules.';localStorage.setItem('ly_placement_result',JSON.stringify({score:percent,recommendation:document.getElementById('placementRecommendation').textContent,date:new Date().toISOString()}));return;} index+=1;renderPlacement();
 });
});
