---
pagename: epilegomena
year: 2015-2016
---

var docDefinition = {
      header: 'simple text',

      footer: {
         columns: [
            'Left part',
            { text: 'Right part', alignment: 'right' }
         ]
      },

      content: [
         'Bulleted list example:',
         {
            // to treat a paragraph as a bulleted list, set an array of items under the ul key
            ul: [

               {% include print-groupby-epilegomena-onefile-allsemester.html %}

            ]
         },

         'Numbered list example:',
         {
            // for numbered lists set the ol key
            ol: [
               'Item 1',
               'Item 2',
               'Item 3'
            ]
         }
      ]
   };

$(document).ready( function() {
   $('.print-button').on('click', pdfMake.createPdf(docDefinition).open());
});