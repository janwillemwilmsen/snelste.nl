---
title:  Zelf performance dashboard maken
description: Hoe doe je dat?
img: first-blog-article1.jpg
alt: my first blog article
tags: none
door: JW
volgorde: 10
------

# Zelf een performance dashboard maken?

Snel inzicht in de belangrijkste metrics. Zien of je vooruitgang boekt. Zonder inloggen. 

<style>
    ul {margin-left:-40px;}
    </style>

## Veronderstellend dat:
- ☛ Je Git geinstalleerd hebt, en een Github account hebt
- ☛ Je een Vercel account hebt
- ☛ Je een html-editor (als VS Code) hebt, en weet hoe de terminal werkt
- ☛ Je basiskennis hebt van html en niet bang bent voor code


<details class="py-4 pl-8 rounded-sm bg-woodsmoke-800">
<summary>Ik heb geen Git en ook geen Github account</summary>

#### Git
Git is versiebeheer software. Als je Git lokaal installeert dan kan gemakkelijker code delen via o.a. Github. Ook kan je relatief makkelijk bestaande Github repositories naar je computer downloaden en alle depencencies installeren. Een Zip-bestand van Github downloaden kan ook, maar dan heb je geen versiebeheer. Als een nieuwe versie beschikbaar is dan moet je de Zip opnieuw downloaden. 

<a href="" target="_blank"  class="underline">Download Git</a>

#### Github
Github is een website waar veel developers en bedrijven hun code (Git repositories) delen. Er staat veel open source software op Github. Developers die open source software beter willen maken gebruiken Git om een repository naar hun computer te downloaden. Lokaal bewerken ze de code en voegen nieuwe functionaliteit toe, of ze fixen bugs. 

Als het lokaal op hun computer naar behoren werkt dan pushen ze het terug naar Github. De eigenaar van de code kan vervolgens de code testen, en na goedkeuren toevoegen aan de centrale codebase.   

Github is meer dan opslag voor code. Je kan Github ook gebruiken om bepaalde acties(Github Actions) te doen. Waaronder code testen en code bundelen. Acties kunnen met een bepaalde frequentie gedaan worden, maar ook bijvoorbeeld nadat code in de centrale codebase gewijzigd is.

*Om een dashboard te maken wat met enige regelmaat geupdate wordt moeten enkele Github Actions ingericht worden. Voor het hosten van het dashboard koppelen we de code/repository aan Vercel*

<a href="" target="_blank" class="underline">Maak een Github account</a>

</details>
<br>
<details class="px-8 py-4 rounded-sm bg-woodsmoke-800">
<summary>Ik heb geen Vercel account</summary>

#### Vercel
Vercel is een bedrijf gespecialiseerd in het hosten van websites. Ze zijn gericht op het webdevelopers die websites bouwen met Javascript APIs en Markdown. 
Vercel heeft een edge netwerk. In meerdere geografische regio's in de wereld worden kopietjes van je website ontsloten. Daardoor is er altijd een van de versies 'dichtbij' en zijn website die gehost worden op Vercel vrij snel. 

*Jouw Vercel account kan gekoppeld worden aan je Github account. Na het updaten van de code en pushen van de code naar Github zorgt de koppeling met Vercel ervoor dat je website direct bijgewerkt wordt.*

<a href="" target="_blank" class="underline">Maak een Vercel account</a>
</details>

<br>
<details class="py-4 pl-8 rounded-sm bg-woodsmoke-800">
<summary>Wat is VS Code en wat is de terminal</summary>

#### VS Code
VS Code is kort voor Visual Studio Code. VS Code is een IDE (Integrated Developer Environment), en bevat o.a. een editor voor de code van je project. Naast code editen kan je 

<a href="" target="_blank" class="underline">Maak een Vercel account</a>
</details>


Er zijn 2 manieren om een dashboard te maken. Beide bevatten vrijwel evenveel tussenstappen.
- code downloaden, configureren, koppelen aan Github, koppelen aan Vercel
- code 

## Manier 1
