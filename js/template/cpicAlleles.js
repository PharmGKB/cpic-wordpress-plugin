!function(){var l=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.cpicAlleles=l(function(l,e,n,a,t){function r(l,e){var a,t,r="";return r+='\n        <tr>\n            <td style="text-align:right;padding-right:1em;">',(a=n.position)?a=a.call(l,{hash:{},data:e}):(a=l.position,a=typeof a===h?a.apply(l):a),r+=c(a)+"</td>\n            <td>",t=n["if"].call(l,(a=l.allele,null==a||a===!1?a:a.symbol),{hash:{},inverse:u.program(4,s,e),fn:u.program(2,o,e),data:e}),(t||0===t)&&(r+=t),r+="</td>\n            <td>"+c((a=l.allele,a=null==a||a===!1?a:a.gene,a=null==a||a===!1?a:a.symbol,typeof a===h?a.apply(l):a))+'</td>\n            <td><ul class="list-unstyled">\n                ',t=n.each.call(l,l.drugs,{hash:{},inverse:u.noop,fn:u.program(6,p,e),data:e}),(t||0===t)&&(r+=t),r+="\n            </ul></td>\n        </tr>\n    "}function o(l){var e,n="";return n+="\n                "+c((e=l.allele,e=null==e||e===!1?e:e.symbol,typeof e===h?e.apply(l):e))+"\n            "}function s(l){var e,n="";return n+="\n                "+c((e=l.allele,e=null==e||e===!1?e:e.gene,e=null==e||e===!1?e:e.symbol,typeof e===h?e.apply(l):e))+" "+c((e=l.allele,e=null==e||e===!1?e:e.name,typeof e===h?e.apply(l):e))+"\n            "}function p(l,e){var a,t="";return t+='\n                    <li>\n                        <a href="',(a=n.url)?a=a.call(l,{hash:{},data:e}):(a=l.url,a=typeof a===h?a.apply(l):a),t+=c(a)+'">',(a=n.drugName)?a=a.call(l,{hash:{},data:e}):(a=l.drugName,a=typeof a===h?a.apply(l):a),t+=c(a)+" guideline</a>\n                    </li>\n                "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,l.helpers),t=t||{};var i,d="",h="function",c=this.escapeExpression,u=this;return d+='<table class="table table-condensed table-striped" id="tableCpicAlleles">\n    <caption>There is also a <a href="//www.pharmgkb.org/download.do?objCls=common&objId=cpic.alleles.csv">CSV version of this table</a> for download.</caption>\n    <thead>\n    <tr>\n        <th></th>\n        <th>Allele</th>\n        <th>Gene</th>\n        <th>Guideline</th>\n    </tr>\n    </thead>\n    <tbody>\n    ',i=n.each.call(e,e,{hash:{},inverse:u.noop,fn:u.program(1,r,t),data:t}),(i||0===i)&&(d+=i),d+="\n    </tbody>\n</table>\n"})}();