# Contributing to FedRAMP 20x KSI Compliance Tracker

Thank you for your interest in contributing! This tool helps organizations track their FedRAMP compliance journey, and we welcome contributions that keep it accurate and useful.

## How You Can Help

### 1. Keep KSIs Current
FedRAMP requirements evolve. If you notice:
- Outdated KSI descriptions
- Changed requirements
- New KSIs added by FedRAMP
- Deprecated controls

Please open an issue or submit a PR with updates.

### 2. Report Bugs
Found something broken? Please report:
- What you expected to happen
- What actually happened
- Steps to reproduce
- Browser and OS information
- Screenshots if applicable

### 3. Suggest Features
Have ideas for improvements? We'd love to hear them:
- Evidence collection automation
- Integration suggestions
- UI/UX improvements
- Reporting enhancements

### 4. Improve Documentation
- Fix typos or clarify instructions
- Add examples
- Translate to other languages
- Create video tutorials

## Development Process

### Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/KSI.git
   cd KSI
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Making Changes

1. **Code Style**
   - Use TypeScript for type safety
   - Follow existing patterns
   - Keep components focused and reusable
   - Use meaningful variable names

2. **Testing**
   - Test all changes locally
   - Verify localStorage persistence
   - Check responsive design
   - Test in multiple browsers

3. **Commits**
   - Use clear, descriptive commit messages
   - Reference issues when applicable
   - Keep commits focused on single changes

### Submitting Changes

1. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a Pull Request:
   - Describe what changes you made
   - Explain why the changes are needed
   - Reference any related issues
   - Include screenshots for UI changes

3. Address Review Feedback:
   - Be responsive to comments
   - Make requested changes
   - Ask questions if unclear

## Specific Contribution Areas

### Updating KSI Data

Location: `src/data/ksiData.ts`

When updating KSIs:
- Maintain the exact structure
- Update version/date if changing requirements
- Add comments explaining changes
- Consider backward compatibility

### Adding Evidence Requirements

Location: `src/data/ksiEnhancements.ts`

For new evidence requirements:
```typescript
'ksi-id': {
  evidenceRequirements: [
    {
      type: 'Document Type',
      collectionMethod: 'Automated|Manual - Tool/Process',
      repository: 'Storage Location',
      description: 'What this proves'
    }
  ],
  successMetrics: [
    'Specific measurable criteria'
  ],
  continuousMonitoring: true|false,
  nistControls: ['XX-##']
}
```

### UI Components

Location: `src/components/`

Guidelines:
- Use Tailwind classes
- Maintain dark theme consistency
- Keep accessibility in mind
- Add proper TypeScript types

## Code Review Criteria

PRs will be reviewed for:
- **Accuracy** - Are KSI updates correct?
- **Code Quality** - Does it follow patterns?
- **Type Safety** - No TypeScript errors?
- **UI Consistency** - Matches existing design?
- **Documentation** - Are changes documented?

## Community Guidelines

- Be respectful and constructive
- Help others learn
- Assume good intentions
- Focus on the code, not the person
- Celebrate contributions

## Questions?

- Open an issue for clarification
- Reach out to maintainers
- Check existing issues/PRs first

## Recognition

All contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Thanked in the community

Thank you for helping make FedRAMP compliance more accessible!

---

**Note**: By contributing, you agree that your contributions will be licensed under the project's MIT License.