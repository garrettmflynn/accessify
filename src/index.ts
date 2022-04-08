
// -------------------------------- CSS --------------------------------
 
// Add hover repacement for styling
let replaceRule = (rule:CSSStyleRule, query:string, replacement:string) => {
    let style = ""
    if(rule.selectorText.indexOf(query) > -1){
        var regex = new RegExp(query,"g")
        // console.log(rule.cssText)
        var text = rule.cssText.replace(regex,replacement);
        // console.log(text)
        style = text+"\n";
    }
    return style
}

// One Level of Recursion (to reach media queries)
export const transformCSS = () => {
    
        let style = "";
        let query = ":hover"

        for (var i in document.styleSheets) {
            try{    
                var rules = (document.styleSheets[i] as CSSStyleSheet).cssRules;
                for (var r in rules) {
                    const rule = rules[r]
                    if(rule instanceof CSSStyleRule){
                        style += replaceRule(rule, query, ".hover")
                    } else if (rule instanceof CSSStyleSheet){ // NOTE: Test this...
                        for (var r2 in rule.cssRules) {
                            let mediaQuery = rule.cssRules[r2] as CSSStyleRule
                            if(mediaQuery.cssText && mediaQuery.selectorText){
                                style += replaceRule(mediaQuery, query, ".hover")
                            }
                        }
                    }
                }
            } catch{
                console.error(`Cannot access stylesheet from ${document.styleSheets[i].href}`, document.styleSheets[i])
            }
        }

        let globalStyle = document.createElement('style');
        globalStyle.innerHTML = style
        document.getElementsByTagName('head')[0].appendChild(globalStyle);
        return globalStyle
}

export default transformCSS