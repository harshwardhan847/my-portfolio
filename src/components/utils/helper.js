const scrollToSection = (gotTo)=>{
    document.querySelector('#'+gotTo).scrollIntoView({behavior:'smooth'});
};

export default scrollToSection;