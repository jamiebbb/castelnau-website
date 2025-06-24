# Document Management System

This directory contains all investor documents that are managed through the admin panel and displayed on the investor relations page.

## How It Works

### 1. Development Mode
- Upload documents through `/admin` (username: admin, password: castelnau2024)
- Files are automatically saved to this directory
- Documents become immediately available on `/investor-relations`

### 2. Production Mode
- For production deployments (static export), files must be uploaded manually to this directory
- The admin panel will show an error message about static export limitations
- Manual file placement still works perfectly for the investor relations page

## Document Categories

### Annual Reports (`annual-reports`)
- Comprehensive yearly financial reports
- Usually published in Q1 following year-end

### Interim Reports (`interim-reports`)
- Half-yearly and quarterly financial reports
- Published within 60 days of period end

### RNS Announcements (`rns`)
- Regulatory News Service announcements
- Time-sensitive regulatory communications
- AGM notices, director changes, etc.

### Factsheets (`factsheets`)
- Monthly and quarterly performance summaries
- Portfolio overviews and key metrics
- Investor-focused summaries

### Presentations (`presentations`)
- Investor presentation materials
- Conference presentations
- Strategy updates

### Other Documents (`other`)
- Miscellaneous regulatory documents
- Circulars, prospectuses, etc.

## File Requirements

- **Format**: PDF only
- **Size**: Maximum 10MB per file
- **Naming**: Files are automatically renamed with timestamp and title
- **Security**: All files are publicly accessible once uploaded

## Status Management

### Published
- Visible to all investors on the website
- Appears in document lists and search results

### Draft
- Not visible to investors
- Allows for review before publication
- Can be promoted to Published status

### Archived
- Hidden from main document lists
- Still accessible via direct URL
- Used for older documents to declutter main view

## Integration

The system integrates with:
- **Admin Panel**: Full CRUD operations
- **Investor Relations Page**: Public document display
- **Search & Filtering**: Category and status-based filtering
- **Download Tracking**: File access logging (if implemented)

## Backup & Maintenance

- Regular backups of this directory are recommended
- Documents should be retained per regulatory requirements
- Consider implementing automatic archiving for old documents

## Support

For technical issues with the document system:
1. Check browser console for JavaScript errors
2. Verify file permissions on the documents directory
3. Ensure PDF files are not corrupted
4. Contact the development team for API issues 