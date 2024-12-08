#!/bin/sh -e

echo "Current folder: ${pwd}"
echo "Checking syntax all .js files..."
npm run lint:check