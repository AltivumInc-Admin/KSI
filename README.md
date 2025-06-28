# FedRAMP 20x KSI Compliance Tracker

## Disclaimer

This is not an official FedRAMP dashboard.
It is an open-source utility developed by a veteran-led project to track key performance indicators related to FedRAMP alignment and system readiness. While it's built for internal use, it may be helpful to others navigating similar compliance goals or working toward authorization.

**Important Note:** Please be aware that FedRAMP KSIs can change at any time. While I (the repository owner) will make every effort to keep this tool up to date as I work toward compliance myself, I cannot guarantee with absolute certainty that all information is current. I hope to rely on community input to help maintain the accuracy and fidelity of this tool. If you notice any discrepancies or updates needed, please feel free to contribute or raise an issue.

## About

A modern, dark-themed web application for tracking FedRAMP 20x Key Security Indicators (KSI) compliance with enhanced evidence tracking and assessment-ready features.

## ✨ Key Features

### Core Functionality
- **52 FedRAMP 20x KSI Requirements** - Complete coverage of all KSI categories
- **Interactive Checklist System** - Track progress with visual indicators
- **Real-time Progress Dashboard** - Overall and per-category completion metrics
- **Dark Theme UI** - Easy on the eyes for extended use
- **Local Storage Persistence** - All data stored privately in your browser

### Evidence Management
- **Document Upload Support** - Attach evidence files directly to each KSI
  - Supported formats: PDF, DOC, DOCX, TXT, PNG, JPG, JPEG, CSV, XLSX, JSON
  - Base64 encoding for browser storage
  - Download and preview capabilities
- **Evidence Requirements Tracking** - For each KSI:
  - Evidence type specification
  - Collection method (Automated/Manual)
  - Repository location
  - Detailed descriptions
- **Success Metrics** - Measurable criteria with specific thresholds
- **NIST Control Mapping** - Reference relevant 800-53 controls

### Audit & Compliance
- **Comprehensive Audit Log** - Automatic tracking of all changes:
  - Status changes with old/new values
  - Checklist completions
  - Evidence updates
  - Document uploads/removals
  - Timestamp and user tracking (ready for multi-user)
- **Advanced Filtering** - Filter audit log by event type or category
- **CSV Export** - Download audit history for compliance records

### Reporting & Export
- **Progress Reports** - Generate detailed markdown reports including:
  - Overall completion statistics
  - Category-by-category breakdown
  - Evidence requirements
  - Success metrics
  - NIST control mappings
- **Data Export/Import** - Full JSON export for backup or migration
- **Evidence Checklist Export** - Track what evidence is still needed

### Enhanced for FedRAMP Assessment
- **Continuous Monitoring Indicators** - Shows which KSIs require ongoing validation
- **3PAO-Ready Evidence Templates** - Pre-structured evidence requirements based on assessor expectations
- **Specific Success Metrics** - Aligned with FedRAMP evaluation criteria such as:
  - Remediation timeframes (24-48 hours by severity)
  - Coverage percentages (>95% log collection)
  - Rotation schedules (≤365 days for keys)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AltivumInc-Admin/KSI.git
cd KSI
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173/ in your browser

### Production Build

```bash
npm run build
npm run preview
```

## 📖 Usage Guide

### Basic Workflow

1. **Review KSI Categories** - Click headers to expand/collapse
2. **Check Off Requirements** - Click checkboxes as you complete items
3. **Update Status** - Use dropdowns to mark items as Not Started, In Progress, or Complete
4. **Add Evidence** - Document your implementation:
   - Write notes in the evidence text field
   - Upload supporting documents
   - Review evidence requirements
5. **Track Progress** - Monitor dashboard for overall completion
6. **Generate Reports** - Export progress for stakeholders or assessors

### Evidence Requirements

Each enhanced KSI displays:
- **Required Evidence Types** - What documents/reports you need
- **Collection Methods** - Whether evidence can be automated
- **Repository Locations** - Where to store evidence
- **Success Metrics** - Specific criteria to meet
- **NIST Controls** - Related security controls

### Audit Trail

The audit log automatically captures:
- Every status change
- Checklist modifications  
- Evidence updates
- Document management
- Timestamps for compliance

## 🏗️ Architecture

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS (dark theme)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React hooks + Local Storage
- **Type Safety**: Full TypeScript coverage

### Data Structure
```typescript
interface KSIItem {
  id: string;
  code: string;
  title: string;
  checklist: string[];
  status: CompletionStatus;
  evidence: string;
  completedItems: boolean[];
  documents?: Document[];
  evidenceRequirements?: EvidenceRequirement[];
  successMetrics?: string[];
  continuousMonitoring?: boolean;
  nistControls?: string[];
  notes?: string;
}
```

## 🔐 Data Privacy

- **100% Local** - No external servers or APIs
- **Browser Storage** - All data in localStorage
- **No Analytics** - Zero tracking or telemetry
- **Export Control** - You own and control all your data

## 🚢 Deployment

The app can be deployed to any static hosting service:

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder
```

### Popular Hosting Options
- Netlify (drag & drop deployment)
- Vercel (automatic from GitHub)
- AWS S3 + CloudFront
- Azure Static Web Apps

## 🤝 Contributing

We welcome contributions to keep the KSIs current and improve functionality!

### How to Contribute

1. **Report Issues** - Notice outdated KSIs or bugs? Open an issue
2. **Submit PRs** - Fork, make changes, and submit a pull request
3. **Update KSIs** - Help maintain accuracy as FedRAMP evolves
4. **Add Features** - Enhance functionality for the community

### Development Guidelines

- Maintain TypeScript type safety
- Follow existing code patterns
- Test all changes locally
- Update documentation
- Add to CHANGELOG.md

## 📋 Roadmap

### Planned Enhancements
- [ ] Multi-user support with role-based access
- [ ] API integration for automated evidence collection
- [ ] Advanced reporting with PDF generation
- [ ] Jira/ServiceNow export formats
- [ ] FedRAMP High and Moderate baselines
- [ ] Automated remediation tracking

### Community Requests
Open an issue to suggest new features!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- FedRAMP PMO for the 20x framework
- The veteran community driving innovation in GovTech
- All contributors helping maintain KSI accuracy

---

**Version**: 2.0.0  
**Last Updated**: December 2024  
**Maintainer**: Christian Perez (Altivum Inc)

For questions or support, please open an issue on GitHub.