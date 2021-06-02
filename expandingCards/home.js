// hope this will be easy 

var panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>
{
    panel.addEventListener('mouseover' , expand);
}
);

function expand(event)
{
    // console.log(event.target);
    panels.forEach((panel) =>
    {
        if(panel != event.target)
        {
            panel.classList.remove('active');
        }
        else if(panel === event.target)
        {
            panel.classList.add('active');
        }
    }
    );
}