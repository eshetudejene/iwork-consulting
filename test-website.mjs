import { chromium } from '@playwright/test';

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  
  // Define screen sizes to test
  const screenSizes = [
    { width: 1920, height: 1080, name: 'desktop' },
    { width: 1366, height: 768, name: 'laptop' },
    { width: 768, height: 1024, name: 'tablet' },
    { width: 375, height: 812, name: 'mobile' }
  ];
  
  for (const size of screenSizes) {
    // Create new context with viewport size
    const context = await browser.newContext({
      viewport: { width: size.width, height: size.height }
    });
    
    // Create new page
    const page = await context.newPage();
    
    // Navigate to the website
    await page.goto('http://localhost:3001');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Take full page screenshot
    await page.screenshot({ 
      path: `screenshot-${size.name}.png`,
      fullPage: true 
    });
    
    // Close context
    await context.close();
    
    console.log(`Captured screenshot for ${size.name} viewport`);
  }
  
  // Close browser
  await browser.close();
  console.log('All screenshots captured');
})().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
