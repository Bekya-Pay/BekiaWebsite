#!/bin/bash

# Image Optimization Script for BekyaPay Website
# This script optimizes JPEG, PNG images and converts them to WebP

echo "╔══════════════════════════════════════════════════════════╗"
echo "║     BekyaPay Image Optimization Script                 ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Check if required tools are installed
command -v convert >/dev/null 2>&1 || { 
    echo "❌ ImageMagick is not installed. Install it with:"
    echo "   Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "   macOS: brew install imagemagick"
    exit 1
}

command -v cwebp >/dev/null 2>&1 || { 
    echo "⚠️  WebP tools not installed. WebP conversion will be skipped."
    echo "   Install with:"
    echo "   Ubuntu/Debian: sudo apt-get install webp"
    echo "   macOS: brew install webp"
    SKIP_WEBP=true
}

# Navigate to images directory
cd "$(dirname "$0")/images" || exit 1

echo "📂 Working in: $(pwd)"
echo ""

# Create backup directory
BACKUP_DIR="originals_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "💾 Backing up original images to: $BACKUP_DIR"
echo ""

# Counter variables
JPEG_COUNT=0
PNG_COUNT=0
WEBP_COUNT=0
TOTAL_SAVED=0

# Optimize JPEG files
echo "🖼️  Optimizing JPEG files..."
for file in *.jpg *.jpeg *.JPG *.JPEG 2>/dev/null; do
    if [ -f "$file" ]; then
        # Get original size
        ORIGINAL_SIZE=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        
        # Backup original
        cp "$file" "$BACKUP_DIR/"
        
        # Optimize (reduce quality to 85%, strip metadata)
        convert "$file" -quality 85 -strip "$file"
        
        # Get new size
        NEW_SIZE=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        SAVED=$((ORIGINAL_SIZE - NEW_SIZE))
        TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
        
        echo "  ✓ $file: $(numfmt --to=iec-i --suffix=B $ORIGINAL_SIZE) → $(numfmt --to=iec-i --suffix=B $NEW_SIZE) (saved $(numfmt --to=iec-i --suffix=B $SAVED))"
        JPEG_COUNT=$((JPEG_COUNT + 1))
    fi
done

echo ""

# Optimize PNG files
echo "🎨 Optimizing PNG files..."
for file in *.png *.PNG 2>/dev/null; do
    if [ -f "$file" ]; then
        # Get original size
        ORIGINAL_SIZE=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        
        # Backup original
        cp "$file" "$BACKUP_DIR/"
        
        # Optimize (reduce quality to 85%, strip metadata)
        convert "$file" -quality 85 -strip "$file"
        
        # Get new size
        NEW_SIZE=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        SAVED=$((ORIGINAL_SIZE - NEW_SIZE))
        TOTAL_SAVED=$((TOTAL_SAVED + SAVED))
        
        echo "  ✓ $file: $(numfmt --to=iec-i --suffix=B $ORIGINAL_SIZE) → $(numfmt --to=iec-i --suffix=B $NEW_SIZE) (saved $(numfmt --to=iec-i --suffix=B $SAVED))"
        PNG_COUNT=$((PNG_COUNT + 1))
    fi
done

echo ""

# Convert to WebP
if [ "$SKIP_WEBP" != true ]; then
    echo "🚀 Converting to WebP format..."
    for file in *.jpg *.jpeg *.png *.JPG *.JPEG *.PNG 2>/dev/null; do
        if [ -f "$file" ]; then
            WEBP_FILE="${file%.*}.webp"
            
            # Only convert if WebP doesn't exist
            if [ ! -f "$WEBP_FILE" ]; then
                cwebp -q 85 "$file" -o "$WEBP_FILE" -quiet
                
                ORIGINAL_SIZE=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
                WEBP_SIZE=$(stat -f%z "$WEBP_FILE" 2>/dev/null || stat -c%s "$WEBP_FILE" 2>/dev/null)
                SAVED=$((ORIGINAL_SIZE - WEBP_SIZE))
                
                echo "  ✓ $WEBP_FILE created ($(numfmt --to=iec-i --suffix=B $WEBP_SIZE), saved $(numfmt --to=iec-i --suffix=B $SAVED) vs original)"
                WEBP_COUNT=$((WEBP_COUNT + 1))
            fi
        fi
    done
fi

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                  Optimization Complete!                 ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
echo "📊 Summary:"
echo "  • JPEG files optimized: $JPEG_COUNT"
echo "  • PNG files optimized: $PNG_COUNT"
echo "  • WebP files created: $WEBP_COUNT"
echo "  • Total space saved: $(numfmt --to=iec-i --suffix=B $TOTAL_SAVED)"
echo ""
echo "💡 Next Steps:"
echo "  1. Test your website to ensure images look good"
echo "  2. If satisfied, you can delete the backup: $BACKUP_DIR"
echo "  3. If not, restore from backup: cp $BACKUP_DIR/* ."
echo "  4. For WebP support, update HTML to use <picture> elements"
echo ""
echo "✨ Done!"

