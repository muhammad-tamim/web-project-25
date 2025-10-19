## Project Name: 

## Project Description:  

## Live Site Link:

## What I learned new while building this project:

1. How to avoid repeating tailwind classes for NavLinks isActive: 
 
form this: 

```jsx
<div>
    {navItems.map((item) => <NavLink key={item.id} to={item.to} 
    className={({ isActive }) => isActive ? "text-primary-content/70 font-medium text-lg border-b-2 border-primary ""text-primary-content/70 font-medium text-lg"}>{item.label}</NavLink>)}
</div>
```
to this: 

```jsx
<div>
{navItems.map((item) => <NavLink key={item.id} to={item.to}
    className={({ isActive }) => {
        const baseClasses = "text-primary-content/70 font-medium text-lg";
        const activeClasses = "border-b-2 border-primary";
        return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
    }}>{item.label}</NavLink>)}
</div>
```


## Challenges I faced while building this project:

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
