voronoi
---

A simple project using the node and express frameworks to demonstrate d3 functionalities.

Copyright 2015 Luke Campbell

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

installation
---

1. Get and install nodeJS
2. Install bower for the command line (may have to run as root, depending on
   how node was installed)
   ```
   npm install -g bower
   ```
3. Install the node packages
   ```
   npm install
   ```
4. Install the bower packages
   ```
   bower install
   ```
5. Run grunt to generate the partials
   ```
   grunt jade
   ```
6. Launch the application in DEBUG mode
   ```
   DEBUG=voronoi npm start
   ```

