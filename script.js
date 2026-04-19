// Global counters for unique IDs
let expCount = 0;
let eduCount = 0;
let projCount = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Auto-update preview on input change
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    
    // Add initial empty entries
    addExperience();
    addEducation();
    addProject();
    
    updatePreview();
});

// Update preview in real-time
function updatePreview() {
    const preview = document.getElementById('preview');
    
    // Personal Info
    const name = document.getElementById('name').value || 'Your Name';
    const title = document.getElementById('title').value || 'Professional Title';
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const linkedin = document.getElementById('linkedin').value;
    
    // Summary
    const summary = document.getElementById('summary').value;
    
    // Skills
    const skillsInput = document.getElementById('skills').value;
    const skills = skillsInput ? skillsInput.split(',').map(s => s.trim()).filter(s => s) : [];
    
    // Experience
    let expHtml = '';
    document.querySelectorAll('.experience-entry').forEach(entry => {
        const pos = entry.querySelector('[name=\"exp-position\"]').value;
        const company = entry.querySelector('[name=\"exp-company\"]').value;
        const dates = entry.querySelector('[name=\"exp-dates\"]').value;
        const desc = entry.querySelector('[name=\"exp-desc\"]').value;
        if (pos || company) {
            expHtml += `
                <div class="item">
                    <div class="item-title">${escapeHtml(pos)} at ${escapeHtml(company)}</div>
                    <div class="item-meta">${escapeHtml(dates)}</div>
                    <div class="item-desc">${escapeHtml(desc)}</div>
                </div>
            `;
        }
    });
    
    // Education
    let eduHtml = '';
    document.querySelectorAll('.education-entry').forEach(entry => {
        const degree = entry.querySelector('[name=\"edu-degree\"]').value;
        const school = entry.querySelector('[name=\"edu-school\"]').value;
        const dates = entry.querySelector('[name=\"edu-dates\"]').value;
        if (degree || school) {
            eduHtml += `
                <div class="item">
                    <div class="item-title">${escapeHtml(degree)}</div>
                    <div class="item-meta">${escapeHtml(school)} • ${escapeHtml(dates)}</div>
                </div>
            `;
        }
    });
    
    // Projects
    let projHtml = '';
    document.querySelectorAll('.project-entry').forEach(entry => {
        const name = entry.querySelector('[name=\"proj-name\"]').value;
        const desc = entry.querySelector('[name=\"proj-desc\"]').value;
        const link = entry.querySelector('[name=\"proj-link\"]').value;
        if (name) {
            const linkHtml = link ? `<a href="${escapeHtml(link)}" target="_blank">${escapeHtml(name)}</a>` : escapeHtml(name);
            projHtml += `
                <div class="item">
                    <div class="item-title">${linkHtml}</div>
                    <div class="item-desc">${escapeHtml(desc)}</div>
                </div>
            `;
        }
    });
    
    preview.innerHTML = `
        <div class="resume-preview">
            <h1>${escapeHtml(name)}</h1>
            <div class="contact">
                ${title ? `<strong>${escapeHtml(title)}</strong><br>` : ''}
                ${email ? `${escapeHtml(email)} • ` : ''}${phone ? escapeHtml(phone) : ''}${location ? ` • ${escapeHtml(location)}` : ''}
                ${linkedin ? `<br><a href="${escapeHtml(linkedin)}" target="_blank">LinkedIn</a>` : ''}
            </div>
            
            ${summary ? `
                <div class="section">
                    <h3>Professional Summary</h3>
                    <p>${escapeHtml(summary)}</p>
                </div>
            ` : ''}
            
            ${expHtml ? `
                <div class="section">
                    <h3>Work Experience</h3>
                    ${expHtml}
                </div>
            ` : ''}
            
            ${eduHtml ? `
                <div class="section">
                    <h3>Education</h3>
                    ${eduHtml}
                </div>
            ` : ''}
            
            ${skills.length ? `
                <div class="section">
                    <h3>Skills</h3>
                    <div class="skills-list">
                        ${skills.map(skill => `<span class="skill-tag">${escapeHtml(skill)}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${projHtml ? `
                <div class="section">
                    <h3>Projects</h3>
                    ${projHtml}
                </div>
            ` : ''}
        </div>
    `;
}

// Add Experience entry
function addExperience() {
    expCount++;
    const list = document.getElementById('experience-list');
    const entry = document.createElement('div');
    entry.className = 'experience-entry';
    entry.innerHTML = `
        <input type="text" name="exp-position" placeholder="Position">
        <input type="text" name="exp-company" placeholder="Company">
        <input type="text" name="exp-dates" placeholder="Dates (e.g., 2020 - Present)">
        <textarea name="exp-desc" placeholder="Description / Responsibilities"></textarea>
        <button type="button" class="remove-btn" onclick="removeEntry(this)">Remove</button>
    `;
    list.appendChild(entry);
    updatePreview();
}

// Add Education
function addEducation() {
    eduCount++;
    const list = document.getElementById('education-list');
    const entry = document.createElement('div');
    entry.className = 'education-entry';
    entry.innerHTML = `
        <input type="text" name="edu-degree" placeholder="Degree">
        <input type="text" name="edu-school" placeholder="School / University">
        <input type="text" name="edu-dates" placeholder="Dates (e.g., 2016 - 2020)">
        <button type="button" class="remove-btn" onclick="removeEntry(this)">Remove</button>
    `;
    list.appendChild(entry);
    updatePreview();
}

// Add Project
function addProject() {
    projCount++;
    const list = document.getElementById('projects-list');
    const entry = document.createElement('div');
    entry.className = 'project-entry';
    entry.innerHTML = `
        <input type="text" name="proj-name" placeholder="Project Name">
        <textarea name="proj-desc" placeholder="Description / Technologies used"></textarea>
        <input type="url" name="proj-link" placeholder="Project URL (optional)">
        <button type="button" class="remove-btn" onclick="removeEntry(this)">Remove</button>
    `;
    list.appendChild(entry);
    updatePreview();
}

// Remove entry
function removeEntry(btn) {
    btn.parentElement.remove();
    updatePreview();
}

// Print resume
function printResume() {
    updatePreview();
    window.print();
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '<',
        '>': '>',
        '"': '"',
        "'": '&#039;'
    };
    return text.replace(/[&<>\"']/g, m => map[m]);
}
