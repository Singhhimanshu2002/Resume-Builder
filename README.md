# Resume Builder

A modern, responsive web application for creating professional resumes with live preview and print/download functionality.

![Resume Builder Screenshot](screenshot.png)

## 🚀 Features

- **Live Preview**: See your resume update in real-time as you type
- **Dynamic Sections**: Add/remove multiple work experiences, education entries, and projects
- **Professional Design**: Clean, modern typography using Inter font
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Print-Ready**: One-click print/download with print-optimized styles
- **Secure**: XSS protection with HTML escaping
- **Easy to Use**: Intuitive form interface, no account required

## 📱 Sections Included

- Personal Information (Name, Title, Contact, LinkedIn)
- Professional Summary
- Work Experience (multiple entries)
- Education (multiple entries)
- Skills (comma-separated tags)
- Projects (with links)

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Flexbox layout, custom properties, print styles
- **Vanilla JavaScript** - No frameworks needed
- **Google Fonts** - Inter font family

## 🎮 Quick Start

1. Open `index.html` in any modern web browser
2. Fill out the form sections
3. Watch the live preview update automatically
4. Click **Print/Download PDF** when ready

```bash
# On Windows
start index.html

# Or simply double-click index.html
```

## 📄 Print Instructions

1. Click **Print/Download PDF**
2. Your browser's print dialog opens
3. Select **Save as PDF** or print to paper
4. Print styles automatically hide the form and optimize layout

## 🎨 Customization

- Edit `style.css` for colors/fonts
- Modify `script.js` for additional fields
- Update `index.html` to add new sections

## 📱 Responsive Breakpoints

- Desktop: >768px (side-by-side form + preview)
- Tablet/Mobile: ≤768px (stacked layout)
- iOS Zoom Prevention: Proper font sizes

## 🔒 Security

- All user input is HTML-escaped to prevent XSS
- No data storage or external requests
- Works completely offline

## 📁 File Structure

```
.
├── index.html     # Main app + form structure
├── style.css      # Styles + print layout
├── script.js      # Core functionality
├── README.md      # This file
└── TODO.md        # Development tracking
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Add features or improvements
4. Test in multiple browsers
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for developers who need great resumes fast!**

