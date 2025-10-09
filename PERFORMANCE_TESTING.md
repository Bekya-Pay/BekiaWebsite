# Performance Testing Guide

## How to Test Your Website's Performance

### Quick Browser Test

1. **Open Chrome DevTools** (F12 or Right-click → Inspect)
2. Go to the **Console** tab
3. Reload the page (Ctrl+R or Cmd+R)
4. Look for the green "⚡ Performance Metrics" output

You should see:
- Page Load Time: < 3 seconds (good), < 2 seconds (excellent)
- Connect Time: < 1 second
- Render Time: < 2 seconds

### Network Tab Test

1. Open Chrome DevTools (F12)
2. Go to **Network** tab
3. Check "Disable cache" ✅
4. Filter by **Img** to see only images
5. Reload the page (Ctrl+R)

**What to look for:**
- Images should load progressively (not all at once)
- Only images in viewport should load immediately
- Swiper images should load when you scroll to them
- Total image size should be reasonable for your content

**Recommended Totals:**
- Initial load (above fold): < 500KB of images
- Total page weight: < 2MB
- Number of images on initial load: < 10

### Using Online Tools

#### 1. Google PageSpeed Insights (Recommended)
**URL:** https://pagespeed.web.dev/

Steps:
1. Enter your website URL
2. Click "Analyze"
3. Wait for results (both Mobile and Desktop)

**Target Scores:**
- Performance: > 90 (green)
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

**Key Metrics to Watch:**
- **LCP (Largest Contentful Paint)**: < 2.5s ✅
- **FID (First Input Delay)**: < 100ms ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅

#### 2. GTmetrix
**URL:** https://gtmetrix.com/

Steps:
1. Enter your website URL
2. Click "Test your site"
3. Review the waterfall chart

**What to look for:**
- Images loading in parallel
- Lazy-loaded images not loading initially
- No red/orange warnings for image sizes

#### 3. WebPageTest
**URL:** https://www.webpagetest.org/

Steps:
1. Enter your website URL
2. Select test location close to your users (e.g., "Cairo, Egypt" or "London, UK")
3. Click "Start Test"

**What to check:**
- First Contentful Paint: < 1.5s
- Speed Index: < 3s
- Total Blocking Time: < 300ms

## Understanding the Results

### Good Performance Indicators ✅
- Images load progressively as you scroll
- No layout shift (images don't cause content to jump)
- Hero section loads quickly
- Lazy loading works (images below fold don't load until needed)
- Browser console shows good performance metrics

### Poor Performance Indicators ❌
- All images try to load at once
- Page feels "heavy" or slow
- Long white screens before content appears
- Content jumps around as images load
- High data usage

## Before/After Comparison

### How to Compare

**Before optimization:**
1. Open your website in Incognito mode
2. Open DevTools → Network tab
3. Hard reload (Ctrl+Shift+R)
4. Note the total size and load time
5. Take a screenshot

**After optimization:**
1. Clear browser cache
2. Open DevTools → Network tab
3. Hard reload (Ctrl+Shift+R)
4. Compare total size and load time
5. Take a screenshot

### Expected Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Initial Load Size | ~5-10 MB | ~1-2 MB | 60-80% ⬇️ |
| Number of Requests | 100+ | 30-50 | 50% ⬇️ |
| Load Time | 5-10s | 2-3s | 60-70% ⬇️ |
| PageSpeed Score | 40-60 | 80-95 | +40-50 pts ⬆️ |

## Real-World Testing

### Test on Different Connections

1. **Chrome DevTools Network Throttling:**
   - Open DevTools → Network tab
   - Select throttling: "Fast 3G" or "Slow 3G"
   - Reload page
   - Check if images still load smoothly

2. **Mobile Testing:**
   - Open website on your phone
   - Clear browser cache
   - Load the page
   - Scroll through - images should load as you scroll

### Test on Different Devices

- ✅ Desktop (Chrome, Firefox, Safari)
- ✅ Laptop
- ✅ Tablet
- ✅ Smartphone (Android & iOS)

## Monitoring Over Time

### Set Up Regular Checks

1. **Weekly Check:**
   - Run PageSpeed Insights
   - Ensure score stays > 90

2. **After Adding New Images:**
   - Optimize new images before uploading
   - Test the page after adding them

3. **Monthly Audit:**
   - Check all images are still optimized
   - Look for any new unoptimized content

## Troubleshooting

### Issue: Images Load Slowly
**Solutions:**
- Compress images using the `optimize-images.sh` script
- Check image file sizes (should be < 200KB each)
- Enable server compression (gzip/brotli)

### Issue: Layout Shift (CLS Issues)
**Solutions:**
- Ensure all images have width/height attributes ✅ (already done)
- Set explicit sizes in CSS
- Use aspect-ratio CSS property

### Issue: Large Initial Load
**Solutions:**
- Verify lazy loading is working
- Check Network tab - only above-fold images should load first
- Reduce quality of large background images

### Issue: Swiper Images Not Loading
**Solutions:**
- Check browser console for errors
- Verify `swiper-lazy` class is present
- Ensure Swiper library is loaded correctly

## Advanced: Using Lighthouse CI

For continuous monitoring, you can set up Lighthouse CI:

```bash
npm install -g @lhci/cli
lhci autorun --config=lighthouserc.json
```

This will automatically check performance on every deploy.

## Performance Checklist

Before going live, ensure:
- ✅ All images have lazy loading
- ✅ Critical images are preloaded
- ✅ Image dimensions are specified
- ✅ Alt text is added
- ✅ Images are compressed
- ✅ PageSpeed score > 90
- ✅ LCP < 2.5s
- ✅ CLS < 0.1
- ✅ Mobile performance tested
- ✅ Slow connection tested

## Getting Help

If performance is still poor after optimization:

1. Check the browser console for errors
2. Review the Network waterfall in DevTools
3. Run PageSpeed Insights and follow suggestions
4. Consider using a CDN (like Cloudflare)
5. Enable server-side caching
6. Minify CSS/JavaScript files

## Resources

- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/
- Chrome DevTools: https://developer.chrome.com/docs/devtools/
- Web.dev Performance Guide: https://web.dev/performance/

