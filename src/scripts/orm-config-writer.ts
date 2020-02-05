import fs = require('fs');
import { configService } from 'src/config/config.service';

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(configService.createTypeOrmOptions(), null, 2),
);
