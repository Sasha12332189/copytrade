const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('visible')}})},{threshold:.14});
document.querySelectorAll('.reveal').forEach((el)=>observer.observe(el));

document.querySelectorAll('.lift-card').forEach((card)=>{
  card.addEventListener('mousemove',(e)=>{
    const rect=card.getBoundingClientRect();
    const x=e.clientX-rect.left;
    const y=e.clientY-rect.top;
    const rotateY=((x/rect.width)-0.5)*3.5;
    const rotateX=((y/rect.height)-0.5)*-3.5;
    card.style.transform=`translateY(-6px) scale(1.006) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='';
  });
});
