#!/bin/sh

sourceanalyzer -b sample -clean -logfile sample-clean.log

sourceanalyzer -b sample "*.js"  -logfile sample-translate.log

sourceanalyzer -Xmx512M -b sample -scan -f sample.fpr -logfile sample-scan.log