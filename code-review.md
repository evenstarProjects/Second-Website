# CODE REVIEW  
A code review of my website conducted by AI. Practicing using AI to support my programming development. This is the output:  

## AI OUTPUT - HTML:  
Your HTML code is looking great, Helen! Here's some feedback to consider:  

1. Accessibility Improvements:  
a. Add alt attributes with descriptive text for all images, especially for <img> tags in the footer. This ensures screen readers can interpret them correctly.  
b. Use semantic <section> tags more contextually. For example, <aside> should complement main content, but using them in pairs (aside1 and aside2) without specific context can confuse accessibility tools.  

2. Best Practices:  
a. In the <a> tags for the links under “Aside 1” and “Aside 2,” add meaningful text or improve the description. Avoid repeating "Description of the Link" as it isn't useful for users.  
b. Ensure external links include target="_blank" and rel="noopener noreferrer" to improve security and open in a new tab.  

3. Meta and Title Tags:  
a. Ensure the meta description concisely encapsulates your webpage for search engines. While it's great now, focus on keywords your audience is likely to search for.  

4. HTML Structure:  
a. The <aside> tags for links might be better suited as <nav> elements if the links lead to related pages or resources.
b. Use a consistent hierarchy for headings (<h1> to <h3>). For example, avoid jumping to <h3> directly after <h2> without other content hierarchy.  

5. File Paths:  
a. Ensure the file paths for images (e.g., Images/companyLogo.png) are correct, and test them live. Relative paths can be tricky depending on the file structure.  

## AI OUTPUT - CSS:  
Here are some observations and suggestions for your CSS code:  

1. General Feedback:  
a. Font Properties - You've included both font-weight: 300px and font-weight: 300pt, which don't seem valid since font-weight only accepts numerical values (e.g., 300). Remove the invalid values for better consistency.  

b. Font Variations - The font-variation-settings property is great! Ensure it aligns with the fonts you're using—some fonts may not support optical-sizing or width adjustments.  

c. Global Styles - Nice use of universal styles under body. Consider adding line-height for improved readability, e.g., line-height: 1.6.  

2. Header:  
a. The Height - 120vh may be unnecessarily large for most displays; consider testing different screen sizes and reducing it if needed.  

b. Navbar Links - Hover effects are well-designed, but the active state with padding: 16px 10px can cause alignment issues. Check consistency of spacing within the navigation bar.  

3. Main Section:  
a.i) Grid Layout - The grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr setup might be unnecessarily granular. If all sections span multiple columns, consider simplifying it to grid-template-columns: repeat(6, 1fr).  
a.ii) The grid-column - 2 / 6 for main sections is consistent; great use of span across columns!  

b. Asides - The rounded corners (border-top-right-radius, etc.) are visually appealing, but test how it appears across different screen sizes.  

4. Footer:  
a. Simple yet effective styling! If possible, add padding to the text for better aesthetics.  

## ACTIONS  
(add bullet point list of what you plan to action here)  

1. Add alt descriptions to the img tags of the Social Media logos in the footer.
2. (Once content of Asides have been finalised) rename the class using a Semantic name, and title them properly.
3. (Once Aside links have been added) use meaningful text and include good alt description.
4. Make sure Meta Keywords are things that your users are likely to search.
5. Change Font Weight (and check for other obvious errors), and revert Height back to pre-test style.
6. Add a Line Height, e.g. 1.6.
7. Change Grid Layout to repeat(6, 1fr).
8. Change Navbar Padding to solve alignment issues.
9. Experiment with Aside Border Radius on different screen sizes.
10. Add Padding to the Footer text.


## OTHER NOTES TO BEAR IN MIND  
(Things that aren't immediately "Actionable")  
1. Add alt descriptions to all Images.
2. Use Semantic Language to name Classes, IDs, Divs, and in Descriptions/Alts.
3. Make sure External Links open in a new tab using target="_blank".