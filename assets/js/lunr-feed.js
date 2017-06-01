---
---

var index = lunr(function () {   
  this.field('course')
  this.field('team')
  this.field('rensponsible')
  this.field('teamDescription')
  this.field('winter')
  this.field('spring')
  this.ref('id')
});
{% assign count = 0 %}{% for post in site.data.epilegomena_allsemesters %}
index.add({
  course: {{post.course | strip_html | jsonify}},
  team: {{post.team | jsonify}},
  rensponsible: {{post.rensponsible | strip_html | jsonify}},
  teamDescription: {{post.team-description | strip_html | jsonify}},
  winter: {{ post.winter | jsonify }},
  spring: {{ post.spring | jsonify }},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) );
// builds reference data
var store = [{% for post in site.data.epilegomena_allsemesters %}{
  "course": {{post.course | jsonify }},
  "url": {{ post.url | jsonify }},
  "team": {{ post.team | jsonify }},
  "responsible": {{ post.rensponsible | jsonify }},
  "teamDescription": {{ post.team-description | jsonify }},
  "winter": {{ post.winter | jsonify }},
  "spring": {{ post.spring | jsonify }},
}{% unless forloop.last %},{% endunless %}{% endfor %}]


  