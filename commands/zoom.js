const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'zoom',
    description: 'Send the zoom link',
    execute(message, args) {
        if(!args[0]) return message.reply('Please enter the subject you want the zoom link'); 

        const EPS = new MessageEmbed()
            .setTitle('EPS')
            .setURL('https://zoom.us/j/2481214527?pwd=WTRYMmlRSDN3Ny96a3JEcERiMWd3Zz09')
            .addFields(
                { name: 'Professeur', value: 'Madame Lagesse'},
                { name: 'Lien Zoom', value: 'https://zoom.us/j/2481214527?pwd=WTRYMmlRSDN3Ny96a3JEcERiMWd3Zz09'},
                { name: 'ID', value: '248 121 4527'},
                { name: 'Code Secret', value: '8Khbyz'}
            )
        const ES = new MessageEmbed()
            .setTitle('Espagnol')
            .setURL('https://zoom.us/j/8713226270?pwd=SGlleVpJV0k3SjBrRjZiY3V5VU42Zz09')
            .addFields(
                { name: 'Professeur', value: 'Madame Acosta Martinez'},
                { name: 'Lien Zoom', value: 'https://zoom.us/j/8713226270?pwd=SGlleVpJV0k3SjBrRjZiY3V5VU42Zz09'},
                { name: 'ID', value: '871 322 6270'},
                { name: 'Code Secret', value: '9iegFP'}
            );
        const MATH = new MessageEmbed()
            .setTitle('Math')
            .setURL('https://us05web.zoom.us/j/6623063711?pwd=RXRLUTFVdUZ4czd2a3NrNkxHbFVuUT09')
            .addFields(
                { name: 'Professeur', value: 'Madame Toulet'},
                { name: 'Lien Zoom', value: 'https://us05web.zoom.us/j/6623063711?pwd=RXRLUTFVdUZ4czd2a3NrNkxHbFVuUT09'},
                { name: 'ID', value: '662 306 3711'},
                { name: 'Code Secret', value: 'J88UdU'}
            ); 
        const HG = new MessageEmbed()
            .setTitle('Histoire Geographie')
            .setURL('https://us04web.zoom.us/j/9266096029?pwd=OEY3K0k2a0RMSzRTYnUwSUNYZTk1Zz09')
            .addFields(
                { name: 'Professeur', value: 'Monsieur Buckhory'},
                { name: 'Lien Zoom', value: 'https://us04web.zoom.us/j/9266096029?pwd=OEY3K0k2a0RMSzRTYnUwSUNYZTk1Zz09'},
                { name: 'ID', value: '926 609 6029'},
                { name: 'Code Secret', value: '4anhry'}
            );
        const SI = new MessageEmbed()
            .setTitle('Section Internationale')
            .setURL('https://us02web.zoom.us/j/81699412943?pwd=T2E1SXVqN2ZDTDhxM1RscHJnSEFiQT09')
            .addFields(
                { name: 'Professeur', value: 'Madame Ramjuttun'},
                { name: 'Lien Zoom', value: 'https://us02web.zoom.us/j/81699412943?pwd=T2E1SXVqN2ZDTDhxM1RscHJnSEFiQT09'},
                { name: 'ID', value: '816 9941 2943'},
                { name: 'Code Secret', value: 'H5jt4B'}
            );  
        const SP = new MessageEmbed()
            .setTitle('Sciences Physiques')
            .setURL('https://us04web.zoom.us/j/71187461081?pwd=U084TzNKbjN2SVdWRG9wanQ0dDJDUT09')
            .addFields(
                { name: 'Professeur', value: 'Monsieur Godenzi'},
                { name: 'Lien Zoom', value: 'https://us04web.zoom.us/j/71187461081?pwd=U084TzNKbjN2SVdWRG9wanQ0dDJDUT09'},
                { name: 'ID', value: '711 8746 1081'},
                { name: 'Code Secret', value: '28TmQF'}
            );
        const SVT = new MessageEmbed()
            .setTitle('SVT')
            .setURL('https://us04web.zoom.us/j/4823714469?pwd=UzVLbkhaVGI2MXNsWmx0cmtvcTltUT09')
            .addFields(
                { name: 'Professeur', value: 'Madame Lagesse'},
                { name: 'Lien Zoom', value: 'https://us04web.zoom.us/j/4823714469?pwd=UzVLbkhaVGI2MXNsWmx0cmtvcTltUT09'},
                { name: 'ID', value: '482 371 4469'},
                { name: 'Code Secret', value: '312336'}
            );
        const TECH = new MessageEmbed()
            .setTitle('Technologie')
            .setURL('https://us04web.zoom.us/j/76040173001?pwd=RUtYSUtHWGtYb01vZG9HaXB5ZjBOdz09')
            .addFields(
                { name: 'Professeur', value: 'Monsieur Marcon'},
                { name: 'Lien Zoom', value: 'https://us04web.zoom.us/j/76040173001?pwd=RUtYSUtHWGtYb01vZG9HaXB5ZjBOdz09'},
                { name: 'ID', value: '760 4017 3001'},
                { name: 'Code Secret', value: 'WvTp4z'}
            );
    
        switch(args[0]) {
            case 'eps'      : message.reply({embeds: [EPS]}); break;
            case 'es'       : message.reply({embeds: [ES]}); break;
            case 'fr'       : message.reply({embeds: [FR]}); break;
            case 'hg'       : message.reply({embeds: [HG]}); break;
            case 'math'     : message.reply({embeds: [MATH]}); break;
            case 'si'       : message.reply({embeds: [SI]}); break;
            case 'sp'       : message.reply({embeds: [SP]}); break;
            case 'svt'      : message.reply({embeds: [SVT]}); break;
            case 'techno'   : message.reply({embeds: [TECH]}); break;
        }
    }
}