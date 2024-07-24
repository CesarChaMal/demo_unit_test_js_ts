import { spawn } from 'child_process';
import glob from 'glob';
import path from 'path';
import url from 'url';

const testPathPattern = process.argv[2];
console.log(`Using glob pattern: ${testPathPattern}`);

glob(testPathPattern, (err, files) => {
  if (err) {
    console.error('Error expanding glob pattern:', err);
    process.exit(1);
  }

  if (files.length === 0) {
    console.error('No test files found.');
    process.exit(1);
  }

  console.log(`Matched files: ${files.join(', ')}`);

  const unixStylePaths = files.map(file => path.resolve(file).replace(/\\/g, '/'));

  console.log(`Unix-style Paths: ${unixStylePaths.join(', ')}`);

  const nodeArgs = ['--loader', 'ts-node/esm', ...unixStylePaths];

  console.log(`Node arguments: ${nodeArgs.join(' ')}`);

  console.log('\nTo manually run Node, execute the following command in your terminal:\n');
  console.log(`node ${nodeArgs.join(' ')}\n`);

  const nodeProcess = spawn('node', nodeArgs, {
    stdio: 'inherit',
    shell: true
  });

  nodeProcess.on('close', (code) => {
    process.exit(code);
  });
});
