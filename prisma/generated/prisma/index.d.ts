
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Applications
 * 
 */
export type Applications = $Result.DefaultSelection<Prisma.$ApplicationsPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Vacancies
 * 
 */
export type Vacancies = $Result.DefaultSelection<Prisma.$VacanciesPayload>
/**
 * Model Requirements
 * 
 */
export type Requirements = $Result.DefaultSelection<Prisma.$RequirementsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const USER_ROLE: {
  RECRUITER: 'RECRUITER',
  APPLICANT: 'APPLICANT'
};

export type USER_ROLE = (typeof USER_ROLE)[keyof typeof USER_ROLE]


export const GENDER: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type GENDER = (typeof GENDER)[keyof typeof GENDER]


export const VACANCY_TYPE: {
  FULLTIME: 'FULLTIME',
  PARTTIME: 'PARTTIME',
  CONTRACT: 'CONTRACT',
  FREELANCE: 'FREELANCE',
  INTERNSHIP: 'INTERNSHIP'
};

export type VACANCY_TYPE = (typeof VACANCY_TYPE)[keyof typeof VACANCY_TYPE]


export const VACANCY_STATUS: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DRAFT: 'DRAFT'
};

export type VACANCY_STATUS = (typeof VACANCY_STATUS)[keyof typeof VACANCY_STATUS]


export const REQUIREMENT_STATUS: {
  MANDATORY: 'MANDATORY',
  OPTIONAL: 'OPTIONAL',
  OFF: 'OFF'
};

export type REQUIREMENT_STATUS = (typeof REQUIREMENT_STATUS)[keyof typeof REQUIREMENT_STATUS]

}

export type USER_ROLE = $Enums.USER_ROLE

export const USER_ROLE: typeof $Enums.USER_ROLE

export type GENDER = $Enums.GENDER

export const GENDER: typeof $Enums.GENDER

export type VACANCY_TYPE = $Enums.VACANCY_TYPE

export const VACANCY_TYPE: typeof $Enums.VACANCY_TYPE

export type VACANCY_STATUS = $Enums.VACANCY_STATUS

export const VACANCY_STATUS: typeof $Enums.VACANCY_STATUS

export type REQUIREMENT_STATUS = $Enums.REQUIREMENT_STATUS

export const REQUIREMENT_STATUS: typeof $Enums.REQUIREMENT_STATUS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applications`: Exposes CRUD operations for the **Applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.applications.findMany()
    * ```
    */
  get applications(): Prisma.ApplicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vacancies`: Exposes CRUD operations for the **Vacancies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vacancies
    * const vacancies = await prisma.vacancies.findMany()
    * ```
    */
  get vacancies(): Prisma.VacanciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requirements`: Exposes CRUD operations for the **Requirements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requirements
    * const requirements = await prisma.requirements.findMany()
    * ```
    */
  get requirements(): Prisma.RequirementsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Applications: 'Applications',
    Company: 'Company',
    Vacancies: 'Vacancies',
    Requirements: 'Requirements'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "applications" | "company" | "vacancies" | "requirements"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Applications: {
        payload: Prisma.$ApplicationsPayload<ExtArgs>
        fields: Prisma.ApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findFirst: {
            args: Prisma.ApplicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findMany: {
            args: Prisma.ApplicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          create: {
            args: Prisma.ApplicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          createMany: {
            args: Prisma.ApplicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          delete: {
            args: Prisma.ApplicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          update: {
            args: Prisma.ApplicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          aggregate: {
            args: Prisma.ApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplications>
          }
          groupBy: {
            args: Prisma.ApplicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Vacancies: {
        payload: Prisma.$VacanciesPayload<ExtArgs>
        fields: Prisma.VacanciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VacanciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VacanciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload>
          }
          findFirst: {
            args: Prisma.VacanciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VacanciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload>
          }
          findMany: {
            args: Prisma.VacanciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload>[]
          }
          create: {
            args: Prisma.VacanciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload>
          }
          createMany: {
            args: Prisma.VacanciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VacanciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload>[]
          }
          delete: {
            args: Prisma.VacanciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload>
          }
          update: {
            args: Prisma.VacanciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload>
          }
          deleteMany: {
            args: Prisma.VacanciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VacanciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VacanciesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload>[]
          }
          upsert: {
            args: Prisma.VacanciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacanciesPayload>
          }
          aggregate: {
            args: Prisma.VacanciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVacancies>
          }
          groupBy: {
            args: Prisma.VacanciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VacanciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VacanciesCountArgs<ExtArgs>
            result: $Utils.Optional<VacanciesCountAggregateOutputType> | number
          }
        }
      }
      Requirements: {
        payload: Prisma.$RequirementsPayload<ExtArgs>
        fields: Prisma.RequirementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequirementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequirementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload>
          }
          findFirst: {
            args: Prisma.RequirementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequirementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload>
          }
          findMany: {
            args: Prisma.RequirementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload>[]
          }
          create: {
            args: Prisma.RequirementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload>
          }
          createMany: {
            args: Prisma.RequirementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequirementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload>[]
          }
          delete: {
            args: Prisma.RequirementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload>
          }
          update: {
            args: Prisma.RequirementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload>
          }
          deleteMany: {
            args: Prisma.RequirementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequirementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequirementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload>[]
          }
          upsert: {
            args: Prisma.RequirementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequirementsPayload>
          }
          aggregate: {
            args: Prisma.RequirementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequirements>
          }
          groupBy: {
            args: Prisma.RequirementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequirementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequirementsCountArgs<ExtArgs>
            result: $Utils.Optional<RequirementsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    applications?: ApplicationsOmit
    company?: CompanyOmit
    vacancies?: VacanciesOmit
    requirements?: RequirementsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    application: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | UsersCountOutputTypeCountApplicationArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    user: number
    vacancy: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CompanyCountOutputTypeCountUserArgs
    vacancy?: boolean | CompanyCountOutputTypeCountVacancyArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountVacancyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacanciesWhereInput
  }


  /**
   * Count Type VacanciesCountOutputType
   */

  export type VacanciesCountOutputType = {
    application: number
    requirements: number
  }

  export type VacanciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | VacanciesCountOutputTypeCountApplicationArgs
    requirements?: boolean | VacanciesCountOutputTypeCountRequirementsArgs
  }

  // Custom InputTypes
  /**
   * VacanciesCountOutputType without action
   */
  export type VacanciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacanciesCountOutputType
     */
    select?: VacanciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VacanciesCountOutputType without action
   */
  export type VacanciesCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }

  /**
   * VacanciesCountOutputType without action
   */
  export type VacanciesCountOutputTypeCountRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    company_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    company_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    role: $Enums.USER_ROLE | null
    date_of_birth: string | null
    gender: $Enums.GENDER | null
    domicile: string | null
    phone: string | null
    email: string | null
    password: string | null
    linkedin_url: string | null
    avatar: string | null
    company_id: number | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    role: $Enums.USER_ROLE | null
    date_of_birth: string | null
    gender: $Enums.GENDER | null
    domicile: string | null
    phone: string | null
    email: string | null
    password: string | null
    linkedin_url: string | null
    avatar: string | null
    company_id: number | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    full_name: number
    role: number
    date_of_birth: number
    gender: number
    domicile: number
    phone: number
    email: number
    password: number
    linkedin_url: number
    avatar: number
    company_id: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    company_id?: true
  }

  export type UsersSumAggregateInputType = {
    company_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    full_name?: true
    role?: true
    date_of_birth?: true
    gender?: true
    domicile?: true
    phone?: true
    email?: true
    password?: true
    linkedin_url?: true
    avatar?: true
    company_id?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    full_name?: true
    role?: true
    date_of_birth?: true
    gender?: true
    domicile?: true
    phone?: true
    email?: true
    password?: true
    linkedin_url?: true
    avatar?: true
    company_id?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    full_name?: true
    role?: true
    date_of_birth?: true
    gender?: true
    domicile?: true
    phone?: true
    email?: true
    password?: true
    linkedin_url?: true
    avatar?: true
    company_id?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    full_name: string | null
    role: $Enums.USER_ROLE
    date_of_birth: string | null
    gender: $Enums.GENDER | null
    domicile: string | null
    phone: string | null
    email: string
    password: string | null
    linkedin_url: string | null
    avatar: string | null
    company_id: number | null
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    role?: boolean
    date_of_birth?: boolean
    gender?: boolean
    domicile?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    linkedin_url?: boolean
    avatar?: boolean
    company_id?: boolean
    created_at?: boolean
    application?: boolean | Users$applicationArgs<ExtArgs>
    company?: boolean | Users$companyArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    role?: boolean
    date_of_birth?: boolean
    gender?: boolean
    domicile?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    linkedin_url?: boolean
    avatar?: boolean
    company_id?: boolean
    created_at?: boolean
    company?: boolean | Users$companyArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    role?: boolean
    date_of_birth?: boolean
    gender?: boolean
    domicile?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    linkedin_url?: boolean
    avatar?: boolean
    company_id?: boolean
    created_at?: boolean
    company?: boolean | Users$companyArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    full_name?: boolean
    role?: boolean
    date_of_birth?: boolean
    gender?: boolean
    domicile?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    linkedin_url?: boolean
    avatar?: boolean
    company_id?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "role" | "date_of_birth" | "gender" | "domicile" | "phone" | "email" | "password" | "linkedin_url" | "avatar" | "company_id" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | Users$applicationArgs<ExtArgs>
    company?: boolean | Users$companyArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Users$companyArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Users$companyArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      application: Prisma.$ApplicationsPayload<ExtArgs>[]
      company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string | null
      role: $Enums.USER_ROLE
      date_of_birth: string | null
      gender: $Enums.GENDER | null
      domicile: string | null
      phone: string | null
      email: string
      password: string | null
      linkedin_url: string | null
      avatar: string | null
      company_id: number | null
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends Users$applicationArgs<ExtArgs> = {}>(args?: Subset<T, Users$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends Users$companyArgs<ExtArgs> = {}>(args?: Subset<T, Users$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly full_name: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'USER_ROLE'>
    readonly date_of_birth: FieldRef<"Users", 'String'>
    readonly gender: FieldRef<"Users", 'GENDER'>
    readonly domicile: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly linkedin_url: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly company_id: FieldRef<"Users", 'Int'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.application
   */
  export type Users$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Users.company
   */
  export type Users$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Applications
   */

  export type AggregateApplications = {
    _count: ApplicationsCountAggregateOutputType | null
    _avg: ApplicationsAvgAggregateOutputType | null
    _sum: ApplicationsSumAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  export type ApplicationsAvgAggregateOutputType = {
    id: number | null
    vacancy_id: number | null
  }

  export type ApplicationsSumAggregateOutputType = {
    id: number | null
    vacancy_id: number | null
  }

  export type ApplicationsMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    vacancy_id: number | null
    created_at: Date | null
  }

  export type ApplicationsMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    vacancy_id: number | null
    created_at: Date | null
  }

  export type ApplicationsCountAggregateOutputType = {
    id: number
    user_id: number
    vacancy_id: number
    created_at: number
    _all: number
  }


  export type ApplicationsAvgAggregateInputType = {
    id?: true
    vacancy_id?: true
  }

  export type ApplicationsSumAggregateInputType = {
    id?: true
    vacancy_id?: true
  }

  export type ApplicationsMinAggregateInputType = {
    id?: true
    user_id?: true
    vacancy_id?: true
    created_at?: true
  }

  export type ApplicationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    vacancy_id?: true
    created_at?: true
  }

  export type ApplicationsCountAggregateInputType = {
    id?: true
    user_id?: true
    vacancy_id?: true
    created_at?: true
    _all?: true
  }

  export type ApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to aggregate.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationsMaxAggregateInputType
  }

  export type GetApplicationsAggregateType<T extends ApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplications[P]>
      : GetScalarType<T[P], AggregateApplications[P]>
  }




  export type ApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithAggregationInput | ApplicationsOrderByWithAggregationInput[]
    by: ApplicationsScalarFieldEnum[] | ApplicationsScalarFieldEnum
    having?: ApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationsCountAggregateInputType | true
    _avg?: ApplicationsAvgAggregateInputType
    _sum?: ApplicationsSumAggregateInputType
    _min?: ApplicationsMinAggregateInputType
    _max?: ApplicationsMaxAggregateInputType
  }

  export type ApplicationsGroupByOutputType = {
    id: number
    user_id: string
    vacancy_id: number
    created_at: Date
    _count: ApplicationsCountAggregateOutputType | null
    _avg: ApplicationsAvgAggregateOutputType | null
    _sum: ApplicationsSumAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  type GetApplicationsGroupByPayload<T extends ApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    vacancy_id?: boolean
    created_at?: boolean
    user?: boolean | Applications$userArgs<ExtArgs>
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type ApplicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    vacancy_id?: boolean
    created_at?: boolean
    user?: boolean | Applications$userArgs<ExtArgs>
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type ApplicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    vacancy_id?: boolean
    created_at?: boolean
    user?: boolean | Applications$userArgs<ExtArgs>
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type ApplicationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    vacancy_id?: boolean
    created_at?: boolean
  }

  export type ApplicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "vacancy_id" | "created_at", ExtArgs["result"]["applications"]>
  export type ApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Applications$userArgs<ExtArgs>
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }
  export type ApplicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Applications$userArgs<ExtArgs>
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }
  export type ApplicationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Applications$userArgs<ExtArgs>
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }

  export type $ApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applications"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
      vacancy: Prisma.$VacanciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      vacancy_id: number
      created_at: Date
    }, ExtArgs["result"]["applications"]>
    composites: {}
  }

  type ApplicationsGetPayload<S extends boolean | null | undefined | ApplicationsDefaultArgs> = $Result.GetResult<Prisma.$ApplicationsPayload, S>

  type ApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationsCountAggregateInputType | true
    }

  export interface ApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applications'], meta: { name: 'Applications' } }
    /**
     * Find zero or one Applications that matches the filter.
     * @param {ApplicationsFindUniqueArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationsFindUniqueArgs>(args: SelectSubset<T, ApplicationsFindUniqueArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationsFindUniqueOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationsFindFirstArgs>(args?: SelectSubset<T, ApplicationsFindFirstArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.applications.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationsWithIdOnly = await prisma.applications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationsFindManyArgs>(args?: SelectSubset<T, ApplicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applications.
     * @param {ApplicationsCreateArgs} args - Arguments to create a Applications.
     * @example
     * // Create one Applications
     * const Applications = await prisma.applications.create({
     *   data: {
     *     // ... data to create a Applications
     *   }
     * })
     * 
     */
    create<T extends ApplicationsCreateArgs>(args: SelectSubset<T, ApplicationsCreateArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationsCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationsCreateManyArgs>(args?: SelectSubset<T, ApplicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationsCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationsWithIdOnly = await prisma.applications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Applications.
     * @param {ApplicationsDeleteArgs} args - Arguments to delete one Applications.
     * @example
     * // Delete one Applications
     * const Applications = await prisma.applications.delete({
     *   where: {
     *     // ... filter to delete one Applications
     *   }
     * })
     * 
     */
    delete<T extends ApplicationsDeleteArgs>(args: SelectSubset<T, ApplicationsDeleteArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applications.
     * @param {ApplicationsUpdateArgs} args - Arguments to update one Applications.
     * @example
     * // Update one Applications
     * const applications = await prisma.applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationsUpdateArgs>(args: SelectSubset<T, ApplicationsUpdateArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationsDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationsDeleteManyArgs>(args?: SelectSubset<T, ApplicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationsUpdateManyArgs>(args: SelectSubset<T, ApplicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationsUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationsWithIdOnly = await prisma.applications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Applications.
     * @param {ApplicationsUpsertArgs} args - Arguments to update or create a Applications.
     * @example
     * // Update or create a Applications
     * const applications = await prisma.applications.upsert({
     *   create: {
     *     // ... data to create a Applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applications we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationsUpsertArgs>(args: SelectSubset<T, ApplicationsUpsertArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.applications.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationsCountArgs>(
      args?: Subset<T, ApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationsAggregateArgs>(args: Subset<T, ApplicationsAggregateArgs>): Prisma.PrismaPromise<GetApplicationsAggregateType<T>>

    /**
     * Group by Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applications model
   */
  readonly fields: ApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Applications$userArgs<ExtArgs> = {}>(args?: Subset<T, Applications$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vacancy<T extends VacanciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VacanciesDefaultArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Applications model
   */
  interface ApplicationsFieldRefs {
    readonly id: FieldRef<"Applications", 'Int'>
    readonly user_id: FieldRef<"Applications", 'String'>
    readonly vacancy_id: FieldRef<"Applications", 'Int'>
    readonly created_at: FieldRef<"Applications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Applications findUnique
   */
  export type ApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications findUniqueOrThrow
   */
  export type ApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications findFirst
   */
  export type ApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications findFirstOrThrow
   */
  export type ApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications findMany
   */
  export type ApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications create
   */
  export type ApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Applications.
     */
    data: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
  }

  /**
   * Applications createMany
   */
  export type ApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationsCreateManyInput | ApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applications createManyAndReturn
   */
  export type ApplicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationsCreateManyInput | ApplicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Applications update
   */
  export type ApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Applications.
     */
    data: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
    /**
     * Choose, which Applications to update.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications updateMany
   */
  export type ApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Applications updateManyAndReturn
   */
  export type ApplicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Applications upsert
   */
  export type ApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Applications to update in case it exists.
     */
    where: ApplicationsWhereUniqueInput
    /**
     * In case the Applications found by the `where` argument doesn't exist, create a new Applications with this data.
     */
    create: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
    /**
     * In case the Applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
  }

  /**
   * Applications delete
   */
  export type ApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter which Applications to delete.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications deleteMany
   */
  export type ApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Applications.user
   */
  export type Applications$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Applications without action
   */
  export type ApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    created_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    logo: string | null
    created_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    created_at: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    created_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    created_at?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    created_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    logo: string
    created_at: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    created_at?: boolean
    user?: boolean | Company$userArgs<ExtArgs>
    vacancy?: boolean | Company$vacancyArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    created_at?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "created_at", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Company$userArgs<ExtArgs>
    vacancy?: boolean | Company$vacancyArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>[]
      vacancy: Prisma.$VacanciesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      logo: string
      created_at: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Company$userArgs<ExtArgs> = {}>(args?: Subset<T, Company$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vacancy<T extends Company$vacancyArgs<ExtArgs> = {}>(args?: Subset<T, Company$vacancyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly logo: FieldRef<"Company", 'String'>
    readonly created_at: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.user
   */
  export type Company$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Company.vacancy
   */
  export type Company$vacancyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    where?: VacanciesWhereInput
    orderBy?: VacanciesOrderByWithRelationInput | VacanciesOrderByWithRelationInput[]
    cursor?: VacanciesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VacanciesScalarFieldEnum | VacanciesScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Vacancies
   */

  export type AggregateVacancies = {
    _count: VacanciesCountAggregateOutputType | null
    _avg: VacanciesAvgAggregateOutputType | null
    _sum: VacanciesSumAggregateOutputType | null
    _min: VacanciesMinAggregateOutputType | null
    _max: VacanciesMaxAggregateOutputType | null
  }

  export type VacanciesAvgAggregateOutputType = {
    id: number | null
    company_id: number | null
    min_salary: number | null
    max_salary: number | null
  }

  export type VacanciesSumAggregateOutputType = {
    id: number | null
    company_id: number | null
    min_salary: number | null
    max_salary: number | null
  }

  export type VacanciesMinAggregateOutputType = {
    id: number | null
    company_id: number | null
    position: string | null
    type: $Enums.VACANCY_TYPE | null
    jobdesc: string | null
    placement: string | null
    min_salary: number | null
    max_salary: number | null
    status: $Enums.VACANCY_STATUS | null
    started_at: Date | null
    created_at: Date | null
  }

  export type VacanciesMaxAggregateOutputType = {
    id: number | null
    company_id: number | null
    position: string | null
    type: $Enums.VACANCY_TYPE | null
    jobdesc: string | null
    placement: string | null
    min_salary: number | null
    max_salary: number | null
    status: $Enums.VACANCY_STATUS | null
    started_at: Date | null
    created_at: Date | null
  }

  export type VacanciesCountAggregateOutputType = {
    id: number
    company_id: number
    position: number
    type: number
    jobdesc: number
    placement: number
    min_salary: number
    max_salary: number
    status: number
    started_at: number
    created_at: number
    _all: number
  }


  export type VacanciesAvgAggregateInputType = {
    id?: true
    company_id?: true
    min_salary?: true
    max_salary?: true
  }

  export type VacanciesSumAggregateInputType = {
    id?: true
    company_id?: true
    min_salary?: true
    max_salary?: true
  }

  export type VacanciesMinAggregateInputType = {
    id?: true
    company_id?: true
    position?: true
    type?: true
    jobdesc?: true
    placement?: true
    min_salary?: true
    max_salary?: true
    status?: true
    started_at?: true
    created_at?: true
  }

  export type VacanciesMaxAggregateInputType = {
    id?: true
    company_id?: true
    position?: true
    type?: true
    jobdesc?: true
    placement?: true
    min_salary?: true
    max_salary?: true
    status?: true
    started_at?: true
    created_at?: true
  }

  export type VacanciesCountAggregateInputType = {
    id?: true
    company_id?: true
    position?: true
    type?: true
    jobdesc?: true
    placement?: true
    min_salary?: true
    max_salary?: true
    status?: true
    started_at?: true
    created_at?: true
    _all?: true
  }

  export type VacanciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vacancies to aggregate.
     */
    where?: VacanciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacancies to fetch.
     */
    orderBy?: VacanciesOrderByWithRelationInput | VacanciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VacanciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vacancies
    **/
    _count?: true | VacanciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VacanciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VacanciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VacanciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VacanciesMaxAggregateInputType
  }

  export type GetVacanciesAggregateType<T extends VacanciesAggregateArgs> = {
        [P in keyof T & keyof AggregateVacancies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacancies[P]>
      : GetScalarType<T[P], AggregateVacancies[P]>
  }




  export type VacanciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacanciesWhereInput
    orderBy?: VacanciesOrderByWithAggregationInput | VacanciesOrderByWithAggregationInput[]
    by: VacanciesScalarFieldEnum[] | VacanciesScalarFieldEnum
    having?: VacanciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VacanciesCountAggregateInputType | true
    _avg?: VacanciesAvgAggregateInputType
    _sum?: VacanciesSumAggregateInputType
    _min?: VacanciesMinAggregateInputType
    _max?: VacanciesMaxAggregateInputType
  }

  export type VacanciesGroupByOutputType = {
    id: number
    company_id: number
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status: $Enums.VACANCY_STATUS
    started_at: Date
    created_at: Date
    _count: VacanciesCountAggregateOutputType | null
    _avg: VacanciesAvgAggregateOutputType | null
    _sum: VacanciesSumAggregateOutputType | null
    _min: VacanciesMinAggregateOutputType | null
    _max: VacanciesMaxAggregateOutputType | null
  }

  type GetVacanciesGroupByPayload<T extends VacanciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacanciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VacanciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VacanciesGroupByOutputType[P]>
            : GetScalarType<T[P], VacanciesGroupByOutputType[P]>
        }
      >
    >


  export type VacanciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    position?: boolean
    type?: boolean
    jobdesc?: boolean
    placement?: boolean
    min_salary?: boolean
    max_salary?: boolean
    status?: boolean
    started_at?: boolean
    created_at?: boolean
    application?: boolean | Vacancies$applicationArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    requirements?: boolean | Vacancies$requirementsArgs<ExtArgs>
    _count?: boolean | VacanciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacancies"]>

  export type VacanciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    position?: boolean
    type?: boolean
    jobdesc?: boolean
    placement?: boolean
    min_salary?: boolean
    max_salary?: boolean
    status?: boolean
    started_at?: boolean
    created_at?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacancies"]>

  export type VacanciesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    position?: boolean
    type?: boolean
    jobdesc?: boolean
    placement?: boolean
    min_salary?: boolean
    max_salary?: boolean
    status?: boolean
    started_at?: boolean
    created_at?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacancies"]>

  export type VacanciesSelectScalar = {
    id?: boolean
    company_id?: boolean
    position?: boolean
    type?: boolean
    jobdesc?: boolean
    placement?: boolean
    min_salary?: boolean
    max_salary?: boolean
    status?: boolean
    started_at?: boolean
    created_at?: boolean
  }

  export type VacanciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "position" | "type" | "jobdesc" | "placement" | "min_salary" | "max_salary" | "status" | "started_at" | "created_at", ExtArgs["result"]["vacancies"]>
  export type VacanciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | Vacancies$applicationArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    requirements?: boolean | Vacancies$requirementsArgs<ExtArgs>
    _count?: boolean | VacanciesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VacanciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type VacanciesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $VacanciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vacancies"
    objects: {
      application: Prisma.$ApplicationsPayload<ExtArgs>[]
      company: Prisma.$CompanyPayload<ExtArgs>
      requirements: Prisma.$RequirementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_id: number
      position: string
      type: $Enums.VACANCY_TYPE
      jobdesc: string
      placement: string
      min_salary: number
      max_salary: number
      status: $Enums.VACANCY_STATUS
      started_at: Date
      created_at: Date
    }, ExtArgs["result"]["vacancies"]>
    composites: {}
  }

  type VacanciesGetPayload<S extends boolean | null | undefined | VacanciesDefaultArgs> = $Result.GetResult<Prisma.$VacanciesPayload, S>

  type VacanciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VacanciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VacanciesCountAggregateInputType | true
    }

  export interface VacanciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vacancies'], meta: { name: 'Vacancies' } }
    /**
     * Find zero or one Vacancies that matches the filter.
     * @param {VacanciesFindUniqueArgs} args - Arguments to find a Vacancies
     * @example
     * // Get one Vacancies
     * const vacancies = await prisma.vacancies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VacanciesFindUniqueArgs>(args: SelectSubset<T, VacanciesFindUniqueArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vacancies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VacanciesFindUniqueOrThrowArgs} args - Arguments to find a Vacancies
     * @example
     * // Get one Vacancies
     * const vacancies = await prisma.vacancies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VacanciesFindUniqueOrThrowArgs>(args: SelectSubset<T, VacanciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vacancies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacanciesFindFirstArgs} args - Arguments to find a Vacancies
     * @example
     * // Get one Vacancies
     * const vacancies = await prisma.vacancies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VacanciesFindFirstArgs>(args?: SelectSubset<T, VacanciesFindFirstArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vacancies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacanciesFindFirstOrThrowArgs} args - Arguments to find a Vacancies
     * @example
     * // Get one Vacancies
     * const vacancies = await prisma.vacancies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VacanciesFindFirstOrThrowArgs>(args?: SelectSubset<T, VacanciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vacancies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacanciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vacancies
     * const vacancies = await prisma.vacancies.findMany()
     * 
     * // Get first 10 Vacancies
     * const vacancies = await prisma.vacancies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vacanciesWithIdOnly = await prisma.vacancies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VacanciesFindManyArgs>(args?: SelectSubset<T, VacanciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vacancies.
     * @param {VacanciesCreateArgs} args - Arguments to create a Vacancies.
     * @example
     * // Create one Vacancies
     * const Vacancies = await prisma.vacancies.create({
     *   data: {
     *     // ... data to create a Vacancies
     *   }
     * })
     * 
     */
    create<T extends VacanciesCreateArgs>(args: SelectSubset<T, VacanciesCreateArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vacancies.
     * @param {VacanciesCreateManyArgs} args - Arguments to create many Vacancies.
     * @example
     * // Create many Vacancies
     * const vacancies = await prisma.vacancies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VacanciesCreateManyArgs>(args?: SelectSubset<T, VacanciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vacancies and returns the data saved in the database.
     * @param {VacanciesCreateManyAndReturnArgs} args - Arguments to create many Vacancies.
     * @example
     * // Create many Vacancies
     * const vacancies = await prisma.vacancies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vacancies and only return the `id`
     * const vacanciesWithIdOnly = await prisma.vacancies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VacanciesCreateManyAndReturnArgs>(args?: SelectSubset<T, VacanciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vacancies.
     * @param {VacanciesDeleteArgs} args - Arguments to delete one Vacancies.
     * @example
     * // Delete one Vacancies
     * const Vacancies = await prisma.vacancies.delete({
     *   where: {
     *     // ... filter to delete one Vacancies
     *   }
     * })
     * 
     */
    delete<T extends VacanciesDeleteArgs>(args: SelectSubset<T, VacanciesDeleteArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vacancies.
     * @param {VacanciesUpdateArgs} args - Arguments to update one Vacancies.
     * @example
     * // Update one Vacancies
     * const vacancies = await prisma.vacancies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VacanciesUpdateArgs>(args: SelectSubset<T, VacanciesUpdateArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vacancies.
     * @param {VacanciesDeleteManyArgs} args - Arguments to filter Vacancies to delete.
     * @example
     * // Delete a few Vacancies
     * const { count } = await prisma.vacancies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VacanciesDeleteManyArgs>(args?: SelectSubset<T, VacanciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vacancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacanciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vacancies
     * const vacancies = await prisma.vacancies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VacanciesUpdateManyArgs>(args: SelectSubset<T, VacanciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vacancies and returns the data updated in the database.
     * @param {VacanciesUpdateManyAndReturnArgs} args - Arguments to update many Vacancies.
     * @example
     * // Update many Vacancies
     * const vacancies = await prisma.vacancies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vacancies and only return the `id`
     * const vacanciesWithIdOnly = await prisma.vacancies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VacanciesUpdateManyAndReturnArgs>(args: SelectSubset<T, VacanciesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vacancies.
     * @param {VacanciesUpsertArgs} args - Arguments to update or create a Vacancies.
     * @example
     * // Update or create a Vacancies
     * const vacancies = await prisma.vacancies.upsert({
     *   create: {
     *     // ... data to create a Vacancies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vacancies we want to update
     *   }
     * })
     */
    upsert<T extends VacanciesUpsertArgs>(args: SelectSubset<T, VacanciesUpsertArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vacancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacanciesCountArgs} args - Arguments to filter Vacancies to count.
     * @example
     * // Count the number of Vacancies
     * const count = await prisma.vacancies.count({
     *   where: {
     *     // ... the filter for the Vacancies we want to count
     *   }
     * })
    **/
    count<T extends VacanciesCountArgs>(
      args?: Subset<T, VacanciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacanciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vacancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacanciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VacanciesAggregateArgs>(args: Subset<T, VacanciesAggregateArgs>): Prisma.PrismaPromise<GetVacanciesAggregateType<T>>

    /**
     * Group by Vacancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacanciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VacanciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VacanciesGroupByArgs['orderBy'] }
        : { orderBy?: VacanciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VacanciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacanciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vacancies model
   */
  readonly fields: VacanciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vacancies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VacanciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends Vacancies$applicationArgs<ExtArgs> = {}>(args?: Subset<T, Vacancies$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requirements<T extends Vacancies$requirementsArgs<ExtArgs> = {}>(args?: Subset<T, Vacancies$requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vacancies model
   */
  interface VacanciesFieldRefs {
    readonly id: FieldRef<"Vacancies", 'Int'>
    readonly company_id: FieldRef<"Vacancies", 'Int'>
    readonly position: FieldRef<"Vacancies", 'String'>
    readonly type: FieldRef<"Vacancies", 'VACANCY_TYPE'>
    readonly jobdesc: FieldRef<"Vacancies", 'String'>
    readonly placement: FieldRef<"Vacancies", 'String'>
    readonly min_salary: FieldRef<"Vacancies", 'Int'>
    readonly max_salary: FieldRef<"Vacancies", 'Int'>
    readonly status: FieldRef<"Vacancies", 'VACANCY_STATUS'>
    readonly started_at: FieldRef<"Vacancies", 'DateTime'>
    readonly created_at: FieldRef<"Vacancies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vacancies findUnique
   */
  export type VacanciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    /**
     * Filter, which Vacancies to fetch.
     */
    where: VacanciesWhereUniqueInput
  }

  /**
   * Vacancies findUniqueOrThrow
   */
  export type VacanciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    /**
     * Filter, which Vacancies to fetch.
     */
    where: VacanciesWhereUniqueInput
  }

  /**
   * Vacancies findFirst
   */
  export type VacanciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    /**
     * Filter, which Vacancies to fetch.
     */
    where?: VacanciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacancies to fetch.
     */
    orderBy?: VacanciesOrderByWithRelationInput | VacanciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vacancies.
     */
    cursor?: VacanciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vacancies.
     */
    distinct?: VacanciesScalarFieldEnum | VacanciesScalarFieldEnum[]
  }

  /**
   * Vacancies findFirstOrThrow
   */
  export type VacanciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    /**
     * Filter, which Vacancies to fetch.
     */
    where?: VacanciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacancies to fetch.
     */
    orderBy?: VacanciesOrderByWithRelationInput | VacanciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vacancies.
     */
    cursor?: VacanciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vacancies.
     */
    distinct?: VacanciesScalarFieldEnum | VacanciesScalarFieldEnum[]
  }

  /**
   * Vacancies findMany
   */
  export type VacanciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    /**
     * Filter, which Vacancies to fetch.
     */
    where?: VacanciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacancies to fetch.
     */
    orderBy?: VacanciesOrderByWithRelationInput | VacanciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vacancies.
     */
    cursor?: VacanciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacancies.
     */
    skip?: number
    distinct?: VacanciesScalarFieldEnum | VacanciesScalarFieldEnum[]
  }

  /**
   * Vacancies create
   */
  export type VacanciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    /**
     * The data needed to create a Vacancies.
     */
    data: XOR<VacanciesCreateInput, VacanciesUncheckedCreateInput>
  }

  /**
   * Vacancies createMany
   */
  export type VacanciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vacancies.
     */
    data: VacanciesCreateManyInput | VacanciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vacancies createManyAndReturn
   */
  export type VacanciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * The data used to create many Vacancies.
     */
    data: VacanciesCreateManyInput | VacanciesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vacancies update
   */
  export type VacanciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    /**
     * The data needed to update a Vacancies.
     */
    data: XOR<VacanciesUpdateInput, VacanciesUncheckedUpdateInput>
    /**
     * Choose, which Vacancies to update.
     */
    where: VacanciesWhereUniqueInput
  }

  /**
   * Vacancies updateMany
   */
  export type VacanciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vacancies.
     */
    data: XOR<VacanciesUpdateManyMutationInput, VacanciesUncheckedUpdateManyInput>
    /**
     * Filter which Vacancies to update
     */
    where?: VacanciesWhereInput
    /**
     * Limit how many Vacancies to update.
     */
    limit?: number
  }

  /**
   * Vacancies updateManyAndReturn
   */
  export type VacanciesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * The data used to update Vacancies.
     */
    data: XOR<VacanciesUpdateManyMutationInput, VacanciesUncheckedUpdateManyInput>
    /**
     * Filter which Vacancies to update
     */
    where?: VacanciesWhereInput
    /**
     * Limit how many Vacancies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vacancies upsert
   */
  export type VacanciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    /**
     * The filter to search for the Vacancies to update in case it exists.
     */
    where: VacanciesWhereUniqueInput
    /**
     * In case the Vacancies found by the `where` argument doesn't exist, create a new Vacancies with this data.
     */
    create: XOR<VacanciesCreateInput, VacanciesUncheckedCreateInput>
    /**
     * In case the Vacancies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VacanciesUpdateInput, VacanciesUncheckedUpdateInput>
  }

  /**
   * Vacancies delete
   */
  export type VacanciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
    /**
     * Filter which Vacancies to delete.
     */
    where: VacanciesWhereUniqueInput
  }

  /**
   * Vacancies deleteMany
   */
  export type VacanciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vacancies to delete
     */
    where?: VacanciesWhereInput
    /**
     * Limit how many Vacancies to delete.
     */
    limit?: number
  }

  /**
   * Vacancies.application
   */
  export type Vacancies$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Vacancies.requirements
   */
  export type Vacancies$requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    where?: RequirementsWhereInput
    orderBy?: RequirementsOrderByWithRelationInput | RequirementsOrderByWithRelationInput[]
    cursor?: RequirementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequirementsScalarFieldEnum | RequirementsScalarFieldEnum[]
  }

  /**
   * Vacancies without action
   */
  export type VacanciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancies
     */
    select?: VacanciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancies
     */
    omit?: VacanciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacanciesInclude<ExtArgs> | null
  }


  /**
   * Model Requirements
   */

  export type AggregateRequirements = {
    _count: RequirementsCountAggregateOutputType | null
    _avg: RequirementsAvgAggregateOutputType | null
    _sum: RequirementsSumAggregateOutputType | null
    _min: RequirementsMinAggregateOutputType | null
    _max: RequirementsMaxAggregateOutputType | null
  }

  export type RequirementsAvgAggregateOutputType = {
    id: number | null
    vacancy_id: number | null
  }

  export type RequirementsSumAggregateOutputType = {
    id: number | null
    vacancy_id: number | null
  }

  export type RequirementsMinAggregateOutputType = {
    id: number | null
    vacancy_id: number | null
    field_name: string | null
    status: $Enums.REQUIREMENT_STATUS | null
    created_at: Date | null
  }

  export type RequirementsMaxAggregateOutputType = {
    id: number | null
    vacancy_id: number | null
    field_name: string | null
    status: $Enums.REQUIREMENT_STATUS | null
    created_at: Date | null
  }

  export type RequirementsCountAggregateOutputType = {
    id: number
    vacancy_id: number
    field_name: number
    status: number
    created_at: number
    _all: number
  }


  export type RequirementsAvgAggregateInputType = {
    id?: true
    vacancy_id?: true
  }

  export type RequirementsSumAggregateInputType = {
    id?: true
    vacancy_id?: true
  }

  export type RequirementsMinAggregateInputType = {
    id?: true
    vacancy_id?: true
    field_name?: true
    status?: true
    created_at?: true
  }

  export type RequirementsMaxAggregateInputType = {
    id?: true
    vacancy_id?: true
    field_name?: true
    status?: true
    created_at?: true
  }

  export type RequirementsCountAggregateInputType = {
    id?: true
    vacancy_id?: true
    field_name?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type RequirementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requirements to aggregate.
     */
    where?: RequirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementsOrderByWithRelationInput | RequirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requirements
    **/
    _count?: true | RequirementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequirementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequirementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequirementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequirementsMaxAggregateInputType
  }

  export type GetRequirementsAggregateType<T extends RequirementsAggregateArgs> = {
        [P in keyof T & keyof AggregateRequirements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequirements[P]>
      : GetScalarType<T[P], AggregateRequirements[P]>
  }




  export type RequirementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequirementsWhereInput
    orderBy?: RequirementsOrderByWithAggregationInput | RequirementsOrderByWithAggregationInput[]
    by: RequirementsScalarFieldEnum[] | RequirementsScalarFieldEnum
    having?: RequirementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequirementsCountAggregateInputType | true
    _avg?: RequirementsAvgAggregateInputType
    _sum?: RequirementsSumAggregateInputType
    _min?: RequirementsMinAggregateInputType
    _max?: RequirementsMaxAggregateInputType
  }

  export type RequirementsGroupByOutputType = {
    id: number
    vacancy_id: number
    field_name: string
    status: $Enums.REQUIREMENT_STATUS
    created_at: Date
    _count: RequirementsCountAggregateOutputType | null
    _avg: RequirementsAvgAggregateOutputType | null
    _sum: RequirementsSumAggregateOutputType | null
    _min: RequirementsMinAggregateOutputType | null
    _max: RequirementsMaxAggregateOutputType | null
  }

  type GetRequirementsGroupByPayload<T extends RequirementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequirementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequirementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequirementsGroupByOutputType[P]>
            : GetScalarType<T[P], RequirementsGroupByOutputType[P]>
        }
      >
    >


  export type RequirementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vacancy_id?: boolean
    field_name?: boolean
    status?: boolean
    created_at?: boolean
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirements"]>

  export type RequirementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vacancy_id?: boolean
    field_name?: boolean
    status?: boolean
    created_at?: boolean
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirements"]>

  export type RequirementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vacancy_id?: boolean
    field_name?: boolean
    status?: boolean
    created_at?: boolean
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requirements"]>

  export type RequirementsSelectScalar = {
    id?: boolean
    vacancy_id?: boolean
    field_name?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type RequirementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vacancy_id" | "field_name" | "status" | "created_at", ExtArgs["result"]["requirements"]>
  export type RequirementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }
  export type RequirementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }
  export type RequirementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacancy?: boolean | VacanciesDefaultArgs<ExtArgs>
  }

  export type $RequirementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Requirements"
    objects: {
      vacancy: Prisma.$VacanciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vacancy_id: number
      field_name: string
      status: $Enums.REQUIREMENT_STATUS
      created_at: Date
    }, ExtArgs["result"]["requirements"]>
    composites: {}
  }

  type RequirementsGetPayload<S extends boolean | null | undefined | RequirementsDefaultArgs> = $Result.GetResult<Prisma.$RequirementsPayload, S>

  type RequirementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequirementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequirementsCountAggregateInputType | true
    }

  export interface RequirementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Requirements'], meta: { name: 'Requirements' } }
    /**
     * Find zero or one Requirements that matches the filter.
     * @param {RequirementsFindUniqueArgs} args - Arguments to find a Requirements
     * @example
     * // Get one Requirements
     * const requirements = await prisma.requirements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequirementsFindUniqueArgs>(args: SelectSubset<T, RequirementsFindUniqueArgs<ExtArgs>>): Prisma__RequirementsClient<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Requirements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequirementsFindUniqueOrThrowArgs} args - Arguments to find a Requirements
     * @example
     * // Get one Requirements
     * const requirements = await prisma.requirements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequirementsFindUniqueOrThrowArgs>(args: SelectSubset<T, RequirementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequirementsClient<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementsFindFirstArgs} args - Arguments to find a Requirements
     * @example
     * // Get one Requirements
     * const requirements = await prisma.requirements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequirementsFindFirstArgs>(args?: SelectSubset<T, RequirementsFindFirstArgs<ExtArgs>>): Prisma__RequirementsClient<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requirements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementsFindFirstOrThrowArgs} args - Arguments to find a Requirements
     * @example
     * // Get one Requirements
     * const requirements = await prisma.requirements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequirementsFindFirstOrThrowArgs>(args?: SelectSubset<T, RequirementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequirementsClient<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requirements
     * const requirements = await prisma.requirements.findMany()
     * 
     * // Get first 10 Requirements
     * const requirements = await prisma.requirements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requirementsWithIdOnly = await prisma.requirements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequirementsFindManyArgs>(args?: SelectSubset<T, RequirementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Requirements.
     * @param {RequirementsCreateArgs} args - Arguments to create a Requirements.
     * @example
     * // Create one Requirements
     * const Requirements = await prisma.requirements.create({
     *   data: {
     *     // ... data to create a Requirements
     *   }
     * })
     * 
     */
    create<T extends RequirementsCreateArgs>(args: SelectSubset<T, RequirementsCreateArgs<ExtArgs>>): Prisma__RequirementsClient<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requirements.
     * @param {RequirementsCreateManyArgs} args - Arguments to create many Requirements.
     * @example
     * // Create many Requirements
     * const requirements = await prisma.requirements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequirementsCreateManyArgs>(args?: SelectSubset<T, RequirementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requirements and returns the data saved in the database.
     * @param {RequirementsCreateManyAndReturnArgs} args - Arguments to create many Requirements.
     * @example
     * // Create many Requirements
     * const requirements = await prisma.requirements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requirements and only return the `id`
     * const requirementsWithIdOnly = await prisma.requirements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequirementsCreateManyAndReturnArgs>(args?: SelectSubset<T, RequirementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Requirements.
     * @param {RequirementsDeleteArgs} args - Arguments to delete one Requirements.
     * @example
     * // Delete one Requirements
     * const Requirements = await prisma.requirements.delete({
     *   where: {
     *     // ... filter to delete one Requirements
     *   }
     * })
     * 
     */
    delete<T extends RequirementsDeleteArgs>(args: SelectSubset<T, RequirementsDeleteArgs<ExtArgs>>): Prisma__RequirementsClient<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Requirements.
     * @param {RequirementsUpdateArgs} args - Arguments to update one Requirements.
     * @example
     * // Update one Requirements
     * const requirements = await prisma.requirements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequirementsUpdateArgs>(args: SelectSubset<T, RequirementsUpdateArgs<ExtArgs>>): Prisma__RequirementsClient<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requirements.
     * @param {RequirementsDeleteManyArgs} args - Arguments to filter Requirements to delete.
     * @example
     * // Delete a few Requirements
     * const { count } = await prisma.requirements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequirementsDeleteManyArgs>(args?: SelectSubset<T, RequirementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requirements
     * const requirements = await prisma.requirements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequirementsUpdateManyArgs>(args: SelectSubset<T, RequirementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requirements and returns the data updated in the database.
     * @param {RequirementsUpdateManyAndReturnArgs} args - Arguments to update many Requirements.
     * @example
     * // Update many Requirements
     * const requirements = await prisma.requirements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requirements and only return the `id`
     * const requirementsWithIdOnly = await prisma.requirements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequirementsUpdateManyAndReturnArgs>(args: SelectSubset<T, RequirementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Requirements.
     * @param {RequirementsUpsertArgs} args - Arguments to update or create a Requirements.
     * @example
     * // Update or create a Requirements
     * const requirements = await prisma.requirements.upsert({
     *   create: {
     *     // ... data to create a Requirements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Requirements we want to update
     *   }
     * })
     */
    upsert<T extends RequirementsUpsertArgs>(args: SelectSubset<T, RequirementsUpsertArgs<ExtArgs>>): Prisma__RequirementsClient<$Result.GetResult<Prisma.$RequirementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementsCountArgs} args - Arguments to filter Requirements to count.
     * @example
     * // Count the number of Requirements
     * const count = await prisma.requirements.count({
     *   where: {
     *     // ... the filter for the Requirements we want to count
     *   }
     * })
    **/
    count<T extends RequirementsCountArgs>(
      args?: Subset<T, RequirementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequirementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequirementsAggregateArgs>(args: Subset<T, RequirementsAggregateArgs>): Prisma.PrismaPromise<GetRequirementsAggregateType<T>>

    /**
     * Group by Requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequirementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequirementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequirementsGroupByArgs['orderBy'] }
        : { orderBy?: RequirementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequirementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequirementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Requirements model
   */
  readonly fields: RequirementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Requirements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequirementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vacancy<T extends VacanciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VacanciesDefaultArgs<ExtArgs>>): Prisma__VacanciesClient<$Result.GetResult<Prisma.$VacanciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Requirements model
   */
  interface RequirementsFieldRefs {
    readonly id: FieldRef<"Requirements", 'Int'>
    readonly vacancy_id: FieldRef<"Requirements", 'Int'>
    readonly field_name: FieldRef<"Requirements", 'String'>
    readonly status: FieldRef<"Requirements", 'REQUIREMENT_STATUS'>
    readonly created_at: FieldRef<"Requirements", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Requirements findUnique
   */
  export type RequirementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    /**
     * Filter, which Requirements to fetch.
     */
    where: RequirementsWhereUniqueInput
  }

  /**
   * Requirements findUniqueOrThrow
   */
  export type RequirementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    /**
     * Filter, which Requirements to fetch.
     */
    where: RequirementsWhereUniqueInput
  }

  /**
   * Requirements findFirst
   */
  export type RequirementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    /**
     * Filter, which Requirements to fetch.
     */
    where?: RequirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementsOrderByWithRelationInput | RequirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requirements.
     */
    cursor?: RequirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requirements.
     */
    distinct?: RequirementsScalarFieldEnum | RequirementsScalarFieldEnum[]
  }

  /**
   * Requirements findFirstOrThrow
   */
  export type RequirementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    /**
     * Filter, which Requirements to fetch.
     */
    where?: RequirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementsOrderByWithRelationInput | RequirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requirements.
     */
    cursor?: RequirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requirements.
     */
    distinct?: RequirementsScalarFieldEnum | RequirementsScalarFieldEnum[]
  }

  /**
   * Requirements findMany
   */
  export type RequirementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    /**
     * Filter, which Requirements to fetch.
     */
    where?: RequirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requirements to fetch.
     */
    orderBy?: RequirementsOrderByWithRelationInput | RequirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requirements.
     */
    cursor?: RequirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requirements.
     */
    skip?: number
    distinct?: RequirementsScalarFieldEnum | RequirementsScalarFieldEnum[]
  }

  /**
   * Requirements create
   */
  export type RequirementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Requirements.
     */
    data: XOR<RequirementsCreateInput, RequirementsUncheckedCreateInput>
  }

  /**
   * Requirements createMany
   */
  export type RequirementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requirements.
     */
    data: RequirementsCreateManyInput | RequirementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Requirements createManyAndReturn
   */
  export type RequirementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * The data used to create many Requirements.
     */
    data: RequirementsCreateManyInput | RequirementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Requirements update
   */
  export type RequirementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Requirements.
     */
    data: XOR<RequirementsUpdateInput, RequirementsUncheckedUpdateInput>
    /**
     * Choose, which Requirements to update.
     */
    where: RequirementsWhereUniqueInput
  }

  /**
   * Requirements updateMany
   */
  export type RequirementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requirements.
     */
    data: XOR<RequirementsUpdateManyMutationInput, RequirementsUncheckedUpdateManyInput>
    /**
     * Filter which Requirements to update
     */
    where?: RequirementsWhereInput
    /**
     * Limit how many Requirements to update.
     */
    limit?: number
  }

  /**
   * Requirements updateManyAndReturn
   */
  export type RequirementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * The data used to update Requirements.
     */
    data: XOR<RequirementsUpdateManyMutationInput, RequirementsUncheckedUpdateManyInput>
    /**
     * Filter which Requirements to update
     */
    where?: RequirementsWhereInput
    /**
     * Limit how many Requirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Requirements upsert
   */
  export type RequirementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Requirements to update in case it exists.
     */
    where: RequirementsWhereUniqueInput
    /**
     * In case the Requirements found by the `where` argument doesn't exist, create a new Requirements with this data.
     */
    create: XOR<RequirementsCreateInput, RequirementsUncheckedCreateInput>
    /**
     * In case the Requirements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequirementsUpdateInput, RequirementsUncheckedUpdateInput>
  }

  /**
   * Requirements delete
   */
  export type RequirementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
    /**
     * Filter which Requirements to delete.
     */
    where: RequirementsWhereUniqueInput
  }

  /**
   * Requirements deleteMany
   */
  export type RequirementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requirements to delete
     */
    where?: RequirementsWhereInput
    /**
     * Limit how many Requirements to delete.
     */
    limit?: number
  }

  /**
   * Requirements without action
   */
  export type RequirementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requirements
     */
    select?: RequirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requirements
     */
    omit?: RequirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequirementsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    role: 'role',
    date_of_birth: 'date_of_birth',
    gender: 'gender',
    domicile: 'domicile',
    phone: 'phone',
    email: 'email',
    password: 'password',
    linkedin_url: 'linkedin_url',
    avatar: 'avatar',
    company_id: 'company_id',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ApplicationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    vacancy_id: 'vacancy_id',
    created_at: 'created_at'
  };

  export type ApplicationsScalarFieldEnum = (typeof ApplicationsScalarFieldEnum)[keyof typeof ApplicationsScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    created_at: 'created_at'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const VacanciesScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    position: 'position',
    type: 'type',
    jobdesc: 'jobdesc',
    placement: 'placement',
    min_salary: 'min_salary',
    max_salary: 'max_salary',
    status: 'status',
    started_at: 'started_at',
    created_at: 'created_at'
  };

  export type VacanciesScalarFieldEnum = (typeof VacanciesScalarFieldEnum)[keyof typeof VacanciesScalarFieldEnum]


  export const RequirementsScalarFieldEnum: {
    id: 'id',
    vacancy_id: 'vacancy_id',
    field_name: 'field_name',
    status: 'status',
    created_at: 'created_at'
  };

  export type RequirementsScalarFieldEnum = (typeof RequirementsScalarFieldEnum)[keyof typeof RequirementsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'USER_ROLE'
   */
  export type EnumUSER_ROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_ROLE'>
    


  /**
   * Reference to a field of type 'USER_ROLE[]'
   */
  export type ListEnumUSER_ROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_ROLE[]'>
    


  /**
   * Reference to a field of type 'GENDER'
   */
  export type EnumGENDERFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GENDER'>
    


  /**
   * Reference to a field of type 'GENDER[]'
   */
  export type ListEnumGENDERFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GENDER[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'VACANCY_TYPE'
   */
  export type EnumVACANCY_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VACANCY_TYPE'>
    


  /**
   * Reference to a field of type 'VACANCY_TYPE[]'
   */
  export type ListEnumVACANCY_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VACANCY_TYPE[]'>
    


  /**
   * Reference to a field of type 'VACANCY_STATUS'
   */
  export type EnumVACANCY_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VACANCY_STATUS'>
    


  /**
   * Reference to a field of type 'VACANCY_STATUS[]'
   */
  export type ListEnumVACANCY_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VACANCY_STATUS[]'>
    


  /**
   * Reference to a field of type 'REQUIREMENT_STATUS'
   */
  export type EnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'REQUIREMENT_STATUS'>
    


  /**
   * Reference to a field of type 'REQUIREMENT_STATUS[]'
   */
  export type ListEnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'REQUIREMENT_STATUS[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    full_name?: StringNullableFilter<"Users"> | string | null
    role?: EnumUSER_ROLEFilter<"Users"> | $Enums.USER_ROLE
    date_of_birth?: StringNullableFilter<"Users"> | string | null
    gender?: EnumGENDERNullableFilter<"Users"> | $Enums.GENDER | null
    domicile?: StringNullableFilter<"Users"> | string | null
    phone?: StringNullableFilter<"Users"> | string | null
    email?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    linkedin_url?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    company_id?: IntNullableFilter<"Users"> | number | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    application?: ApplicationsListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    role?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    domicile?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    linkedin_url?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    application?: ApplicationsOrderByRelationAggregateInput
    company?: CompanyOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    full_name?: StringNullableFilter<"Users"> | string | null
    role?: EnumUSER_ROLEFilter<"Users"> | $Enums.USER_ROLE
    date_of_birth?: StringNullableFilter<"Users"> | string | null
    gender?: EnumGENDERNullableFilter<"Users"> | $Enums.GENDER | null
    domicile?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    linkedin_url?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    company_id?: IntNullableFilter<"Users"> | number | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    application?: ApplicationsListRelationFilter
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id" | "phone" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    role?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    domicile?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    linkedin_url?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    full_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: EnumUSER_ROLEWithAggregatesFilter<"Users"> | $Enums.USER_ROLE
    date_of_birth?: StringNullableWithAggregatesFilter<"Users"> | string | null
    gender?: EnumGENDERNullableWithAggregatesFilter<"Users"> | $Enums.GENDER | null
    domicile?: StringNullableWithAggregatesFilter<"Users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    linkedin_url?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    company_id?: IntNullableWithAggregatesFilter<"Users"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ApplicationsWhereInput = {
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    id?: IntFilter<"Applications"> | number
    user_id?: StringFilter<"Applications"> | string
    vacancy_id?: IntFilter<"Applications"> | number
    created_at?: DateTimeFilter<"Applications"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    vacancy?: XOR<VacanciesScalarRelationFilter, VacanciesWhereInput>
  }

  export type ApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    vacancy_id?: SortOrder
    created_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    vacancy?: VacanciesOrderByWithRelationInput
  }

  export type ApplicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    user_id?: StringFilter<"Applications"> | string
    vacancy_id?: IntFilter<"Applications"> | number
    created_at?: DateTimeFilter<"Applications"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    vacancy?: XOR<VacanciesScalarRelationFilter, VacanciesWhereInput>
  }, "id">

  export type ApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    vacancy_id?: SortOrder
    created_at?: SortOrder
    _count?: ApplicationsCountOrderByAggregateInput
    _avg?: ApplicationsAvgOrderByAggregateInput
    _max?: ApplicationsMaxOrderByAggregateInput
    _min?: ApplicationsMinOrderByAggregateInput
    _sum?: ApplicationsSumOrderByAggregateInput
  }

  export type ApplicationsScalarWhereWithAggregatesInput = {
    AND?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    OR?: ApplicationsScalarWhereWithAggregatesInput[]
    NOT?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Applications"> | number
    user_id?: StringWithAggregatesFilter<"Applications"> | string
    vacancy_id?: IntWithAggregatesFilter<"Applications"> | number
    created_at?: DateTimeWithAggregatesFilter<"Applications"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    logo?: StringFilter<"Company"> | string
    created_at?: DateTimeFilter<"Company"> | Date | string
    user?: UsersListRelationFilter
    vacancy?: VacanciesListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    created_at?: SortOrder
    user?: UsersOrderByRelationAggregateInput
    vacancy?: VacanciesOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    logo?: StringFilter<"Company"> | string
    created_at?: DateTimeFilter<"Company"> | Date | string
    user?: UsersListRelationFilter
    vacancy?: VacanciesListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    created_at?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    logo?: StringWithAggregatesFilter<"Company"> | string
    created_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type VacanciesWhereInput = {
    AND?: VacanciesWhereInput | VacanciesWhereInput[]
    OR?: VacanciesWhereInput[]
    NOT?: VacanciesWhereInput | VacanciesWhereInput[]
    id?: IntFilter<"Vacancies"> | number
    company_id?: IntFilter<"Vacancies"> | number
    position?: StringFilter<"Vacancies"> | string
    type?: EnumVACANCY_TYPEFilter<"Vacancies"> | $Enums.VACANCY_TYPE
    jobdesc?: StringFilter<"Vacancies"> | string
    placement?: StringFilter<"Vacancies"> | string
    min_salary?: IntFilter<"Vacancies"> | number
    max_salary?: IntFilter<"Vacancies"> | number
    status?: EnumVACANCY_STATUSFilter<"Vacancies"> | $Enums.VACANCY_STATUS
    started_at?: DateTimeFilter<"Vacancies"> | Date | string
    created_at?: DateTimeFilter<"Vacancies"> | Date | string
    application?: ApplicationsListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    requirements?: RequirementsListRelationFilter
  }

  export type VacanciesOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    position?: SortOrder
    type?: SortOrder
    jobdesc?: SortOrder
    placement?: SortOrder
    min_salary?: SortOrder
    max_salary?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    created_at?: SortOrder
    application?: ApplicationsOrderByRelationAggregateInput
    company?: CompanyOrderByWithRelationInput
    requirements?: RequirementsOrderByRelationAggregateInput
  }

  export type VacanciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VacanciesWhereInput | VacanciesWhereInput[]
    OR?: VacanciesWhereInput[]
    NOT?: VacanciesWhereInput | VacanciesWhereInput[]
    company_id?: IntFilter<"Vacancies"> | number
    position?: StringFilter<"Vacancies"> | string
    type?: EnumVACANCY_TYPEFilter<"Vacancies"> | $Enums.VACANCY_TYPE
    jobdesc?: StringFilter<"Vacancies"> | string
    placement?: StringFilter<"Vacancies"> | string
    min_salary?: IntFilter<"Vacancies"> | number
    max_salary?: IntFilter<"Vacancies"> | number
    status?: EnumVACANCY_STATUSFilter<"Vacancies"> | $Enums.VACANCY_STATUS
    started_at?: DateTimeFilter<"Vacancies"> | Date | string
    created_at?: DateTimeFilter<"Vacancies"> | Date | string
    application?: ApplicationsListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    requirements?: RequirementsListRelationFilter
  }, "id">

  export type VacanciesOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    position?: SortOrder
    type?: SortOrder
    jobdesc?: SortOrder
    placement?: SortOrder
    min_salary?: SortOrder
    max_salary?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    created_at?: SortOrder
    _count?: VacanciesCountOrderByAggregateInput
    _avg?: VacanciesAvgOrderByAggregateInput
    _max?: VacanciesMaxOrderByAggregateInput
    _min?: VacanciesMinOrderByAggregateInput
    _sum?: VacanciesSumOrderByAggregateInput
  }

  export type VacanciesScalarWhereWithAggregatesInput = {
    AND?: VacanciesScalarWhereWithAggregatesInput | VacanciesScalarWhereWithAggregatesInput[]
    OR?: VacanciesScalarWhereWithAggregatesInput[]
    NOT?: VacanciesScalarWhereWithAggregatesInput | VacanciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vacancies"> | number
    company_id?: IntWithAggregatesFilter<"Vacancies"> | number
    position?: StringWithAggregatesFilter<"Vacancies"> | string
    type?: EnumVACANCY_TYPEWithAggregatesFilter<"Vacancies"> | $Enums.VACANCY_TYPE
    jobdesc?: StringWithAggregatesFilter<"Vacancies"> | string
    placement?: StringWithAggregatesFilter<"Vacancies"> | string
    min_salary?: IntWithAggregatesFilter<"Vacancies"> | number
    max_salary?: IntWithAggregatesFilter<"Vacancies"> | number
    status?: EnumVACANCY_STATUSWithAggregatesFilter<"Vacancies"> | $Enums.VACANCY_STATUS
    started_at?: DateTimeWithAggregatesFilter<"Vacancies"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Vacancies"> | Date | string
  }

  export type RequirementsWhereInput = {
    AND?: RequirementsWhereInput | RequirementsWhereInput[]
    OR?: RequirementsWhereInput[]
    NOT?: RequirementsWhereInput | RequirementsWhereInput[]
    id?: IntFilter<"Requirements"> | number
    vacancy_id?: IntFilter<"Requirements"> | number
    field_name?: StringFilter<"Requirements"> | string
    status?: EnumREQUIREMENT_STATUSFilter<"Requirements"> | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFilter<"Requirements"> | Date | string
    vacancy?: XOR<VacanciesScalarRelationFilter, VacanciesWhereInput>
  }

  export type RequirementsOrderByWithRelationInput = {
    id?: SortOrder
    vacancy_id?: SortOrder
    field_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    vacancy?: VacanciesOrderByWithRelationInput
  }

  export type RequirementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequirementsWhereInput | RequirementsWhereInput[]
    OR?: RequirementsWhereInput[]
    NOT?: RequirementsWhereInput | RequirementsWhereInput[]
    vacancy_id?: IntFilter<"Requirements"> | number
    field_name?: StringFilter<"Requirements"> | string
    status?: EnumREQUIREMENT_STATUSFilter<"Requirements"> | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFilter<"Requirements"> | Date | string
    vacancy?: XOR<VacanciesScalarRelationFilter, VacanciesWhereInput>
  }, "id">

  export type RequirementsOrderByWithAggregationInput = {
    id?: SortOrder
    vacancy_id?: SortOrder
    field_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: RequirementsCountOrderByAggregateInput
    _avg?: RequirementsAvgOrderByAggregateInput
    _max?: RequirementsMaxOrderByAggregateInput
    _min?: RequirementsMinOrderByAggregateInput
    _sum?: RequirementsSumOrderByAggregateInput
  }

  export type RequirementsScalarWhereWithAggregatesInput = {
    AND?: RequirementsScalarWhereWithAggregatesInput | RequirementsScalarWhereWithAggregatesInput[]
    OR?: RequirementsScalarWhereWithAggregatesInput[]
    NOT?: RequirementsScalarWhereWithAggregatesInput | RequirementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Requirements"> | number
    vacancy_id?: IntWithAggregatesFilter<"Requirements"> | number
    field_name?: StringWithAggregatesFilter<"Requirements"> | string
    status?: EnumREQUIREMENT_STATUSWithAggregatesFilter<"Requirements"> | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeWithAggregatesFilter<"Requirements"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    full_name?: string | null
    role?: $Enums.USER_ROLE
    date_of_birth?: string | null
    gender?: $Enums.GENDER | null
    domicile?: string | null
    phone?: string | null
    email: string
    password?: string | null
    linkedin_url?: string | null
    avatar?: string | null
    created_at?: Date | string
    application?: ApplicationsCreateNestedManyWithoutUserInput
    company?: CompanyCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    full_name?: string | null
    role?: $Enums.USER_ROLE
    date_of_birth?: string | null
    gender?: $Enums.GENDER | null
    domicile?: string | null
    phone?: string | null
    email: string
    password?: string | null
    linkedin_url?: string | null
    avatar?: string | null
    company_id?: number | null
    created_at?: Date | string
    application?: ApplicationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    date_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGENDERFieldUpdateOperationsInput | $Enums.GENDER | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUpdateManyWithoutUserNestedInput
    company?: CompanyUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    date_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGENDERFieldUpdateOperationsInput | $Enums.GENDER | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    full_name?: string | null
    role?: $Enums.USER_ROLE
    date_of_birth?: string | null
    gender?: $Enums.GENDER | null
    domicile?: string | null
    phone?: string | null
    email: string
    password?: string | null
    linkedin_url?: string | null
    avatar?: string | null
    company_id?: number | null
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    date_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGENDERFieldUpdateOperationsInput | $Enums.GENDER | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    date_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGENDERFieldUpdateOperationsInput | $Enums.GENDER | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateInput = {
    created_at?: Date | string
    user?: UsersCreateNestedOneWithoutApplicationInput
    vacancy: VacanciesCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationsUncheckedCreateInput = {
    id?: number
    user_id: string
    vacancy_id: number
    created_at?: Date | string
  }

  export type ApplicationsUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutApplicationNestedInput
    vacancy?: VacanciesUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type ApplicationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    vacancy_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateManyInput = {
    id?: number
    user_id: string
    vacancy_id: number
    created_at?: Date | string
  }

  export type ApplicationsUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    vacancy_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    logo: string
    created_at?: Date | string
    user?: UsersCreateNestedManyWithoutCompanyInput
    vacancy?: VacanciesCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    logo: string
    created_at?: Date | string
    user?: UsersUncheckedCreateNestedManyWithoutCompanyInput
    vacancy?: VacanciesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateManyWithoutCompanyNestedInput
    vacancy?: VacanciesUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUncheckedUpdateManyWithoutCompanyNestedInput
    vacancy?: VacanciesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    logo: string
    created_at?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacanciesCreateInput = {
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
    application?: ApplicationsCreateNestedManyWithoutVacancyInput
    company: CompanyCreateNestedOneWithoutVacancyInput
    requirements?: RequirementsCreateNestedManyWithoutVacancyInput
  }

  export type VacanciesUncheckedCreateInput = {
    id?: number
    company_id: number
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
    application?: ApplicationsUncheckedCreateNestedManyWithoutVacancyInput
    requirements?: RequirementsUncheckedCreateNestedManyWithoutVacancyInput
  }

  export type VacanciesUpdateInput = {
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUpdateManyWithoutVacancyNestedInput
    company?: CompanyUpdateOneRequiredWithoutVacancyNestedInput
    requirements?: RequirementsUpdateManyWithoutVacancyNestedInput
  }

  export type VacanciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUncheckedUpdateManyWithoutVacancyNestedInput
    requirements?: RequirementsUncheckedUpdateManyWithoutVacancyNestedInput
  }

  export type VacanciesCreateManyInput = {
    id?: number
    company_id: number
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
  }

  export type VacanciesUpdateManyMutationInput = {
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacanciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementsCreateInput = {
    field_name: string
    status: $Enums.REQUIREMENT_STATUS
    created_at?: Date | string
    vacancy: VacanciesCreateNestedOneWithoutRequirementsInput
  }

  export type RequirementsUncheckedCreateInput = {
    id?: number
    vacancy_id: number
    field_name: string
    status: $Enums.REQUIREMENT_STATUS
    created_at?: Date | string
  }

  export type RequirementsUpdateInput = {
    field_name?: StringFieldUpdateOperationsInput | string
    status?: EnumREQUIREMENT_STATUSFieldUpdateOperationsInput | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vacancy?: VacanciesUpdateOneRequiredWithoutRequirementsNestedInput
  }

  export type RequirementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vacancy_id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    status?: EnumREQUIREMENT_STATUSFieldUpdateOperationsInput | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementsCreateManyInput = {
    id?: number
    vacancy_id: number
    field_name: string
    status: $Enums.REQUIREMENT_STATUS
    created_at?: Date | string
  }

  export type RequirementsUpdateManyMutationInput = {
    field_name?: StringFieldUpdateOperationsInput | string
    status?: EnumREQUIREMENT_STATUSFieldUpdateOperationsInput | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vacancy_id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    status?: EnumREQUIREMENT_STATUSFieldUpdateOperationsInput | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUSER_ROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_ROLE | EnumUSER_ROLEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_ROLEFilter<$PrismaModel> | $Enums.USER_ROLE
  }

  export type EnumGENDERNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER | EnumGENDERFieldRefInput<$PrismaModel> | null
    in?: $Enums.GENDER[] | ListEnumGENDERFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GENDER[] | ListEnumGENDERFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGENDERNullableFilter<$PrismaModel> | $Enums.GENDER | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ApplicationsListRelationFilter = {
    every?: ApplicationsWhereInput
    some?: ApplicationsWhereInput
    none?: ApplicationsWhereInput
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    domicile?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    linkedin_url?: SortOrder
    avatar?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    company_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    domicile?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    linkedin_url?: SortOrder
    avatar?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    domicile?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    linkedin_url?: SortOrder
    avatar?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    company_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUSER_ROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_ROLE | EnumUSER_ROLEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_ROLEWithAggregatesFilter<$PrismaModel> | $Enums.USER_ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_ROLEFilter<$PrismaModel>
    _max?: NestedEnumUSER_ROLEFilter<$PrismaModel>
  }

  export type EnumGENDERNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER | EnumGENDERFieldRefInput<$PrismaModel> | null
    in?: $Enums.GENDER[] | ListEnumGENDERFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GENDER[] | ListEnumGENDERFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGENDERNullableWithAggregatesFilter<$PrismaModel> | $Enums.GENDER | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGENDERNullableFilter<$PrismaModel>
    _max?: NestedEnumGENDERNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type VacanciesScalarRelationFilter = {
    is?: VacanciesWhereInput
    isNot?: VacanciesWhereInput
  }

  export type ApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vacancy_id?: SortOrder
    created_at?: SortOrder
  }

  export type ApplicationsAvgOrderByAggregateInput = {
    id?: SortOrder
    vacancy_id?: SortOrder
  }

  export type ApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vacancy_id?: SortOrder
    created_at?: SortOrder
  }

  export type ApplicationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vacancy_id?: SortOrder
    created_at?: SortOrder
  }

  export type ApplicationsSumOrderByAggregateInput = {
    id?: SortOrder
    vacancy_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type VacanciesListRelationFilter = {
    every?: VacanciesWhereInput
    some?: VacanciesWhereInput
    none?: VacanciesWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VacanciesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    created_at?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    created_at?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    created_at?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumVACANCY_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.VACANCY_TYPE | EnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.VACANCY_TYPE[] | ListEnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.VACANCY_TYPE[] | ListEnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumVACANCY_TYPEFilter<$PrismaModel> | $Enums.VACANCY_TYPE
  }

  export type EnumVACANCY_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.VACANCY_STATUS | EnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.VACANCY_STATUS[] | ListEnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.VACANCY_STATUS[] | ListEnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumVACANCY_STATUSFilter<$PrismaModel> | $Enums.VACANCY_STATUS
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type RequirementsListRelationFilter = {
    every?: RequirementsWhereInput
    some?: RequirementsWhereInput
    none?: RequirementsWhereInput
  }

  export type RequirementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VacanciesCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    position?: SortOrder
    type?: SortOrder
    jobdesc?: SortOrder
    placement?: SortOrder
    min_salary?: SortOrder
    max_salary?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    created_at?: SortOrder
  }

  export type VacanciesAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_salary?: SortOrder
    max_salary?: SortOrder
  }

  export type VacanciesMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    position?: SortOrder
    type?: SortOrder
    jobdesc?: SortOrder
    placement?: SortOrder
    min_salary?: SortOrder
    max_salary?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    created_at?: SortOrder
  }

  export type VacanciesMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    position?: SortOrder
    type?: SortOrder
    jobdesc?: SortOrder
    placement?: SortOrder
    min_salary?: SortOrder
    max_salary?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    created_at?: SortOrder
  }

  export type VacanciesSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    min_salary?: SortOrder
    max_salary?: SortOrder
  }

  export type EnumVACANCY_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VACANCY_TYPE | EnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.VACANCY_TYPE[] | ListEnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.VACANCY_TYPE[] | ListEnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumVACANCY_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.VACANCY_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVACANCY_TYPEFilter<$PrismaModel>
    _max?: NestedEnumVACANCY_TYPEFilter<$PrismaModel>
  }

  export type EnumVACANCY_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VACANCY_STATUS | EnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.VACANCY_STATUS[] | ListEnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.VACANCY_STATUS[] | ListEnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumVACANCY_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.VACANCY_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVACANCY_STATUSFilter<$PrismaModel>
    _max?: NestedEnumVACANCY_STATUSFilter<$PrismaModel>
  }

  export type EnumREQUIREMENT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.REQUIREMENT_STATUS | EnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.REQUIREMENT_STATUS[] | ListEnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.REQUIREMENT_STATUS[] | ListEnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumREQUIREMENT_STATUSFilter<$PrismaModel> | $Enums.REQUIREMENT_STATUS
  }

  export type RequirementsCountOrderByAggregateInput = {
    id?: SortOrder
    vacancy_id?: SortOrder
    field_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type RequirementsAvgOrderByAggregateInput = {
    id?: SortOrder
    vacancy_id?: SortOrder
  }

  export type RequirementsMaxOrderByAggregateInput = {
    id?: SortOrder
    vacancy_id?: SortOrder
    field_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type RequirementsMinOrderByAggregateInput = {
    id?: SortOrder
    vacancy_id?: SortOrder
    field_name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type RequirementsSumOrderByAggregateInput = {
    id?: SortOrder
    vacancy_id?: SortOrder
  }

  export type EnumREQUIREMENT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.REQUIREMENT_STATUS | EnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.REQUIREMENT_STATUS[] | ListEnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.REQUIREMENT_STATUS[] | ListEnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumREQUIREMENT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.REQUIREMENT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumREQUIREMENT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumREQUIREMENT_STATUSFilter<$PrismaModel>
  }

  export type ApplicationsCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUSER_ROLEFieldUpdateOperationsInput = {
    set?: $Enums.USER_ROLE
  }

  export type NullableEnumGENDERFieldUpdateOperationsInput = {
    set?: $Enums.GENDER | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutUserInput | ApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutUserInput | ApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutUserInput | ApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type CompanyUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutUserInput | ApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutUserInput | ApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutUserInput | ApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutApplicationInput = {
    create?: XOR<UsersCreateWithoutApplicationInput, UsersUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApplicationInput
    connect?: UsersWhereUniqueInput
  }

  export type VacanciesCreateNestedOneWithoutApplicationInput = {
    create?: XOR<VacanciesCreateWithoutApplicationInput, VacanciesUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: VacanciesCreateOrConnectWithoutApplicationInput
    connect?: VacanciesWhereUniqueInput
  }

  export type UsersUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<UsersCreateWithoutApplicationInput, UsersUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApplicationInput
    upsert?: UsersUpsertWithoutApplicationInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutApplicationInput, UsersUpdateWithoutApplicationInput>, UsersUncheckedUpdateWithoutApplicationInput>
  }

  export type VacanciesUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<VacanciesCreateWithoutApplicationInput, VacanciesUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: VacanciesCreateOrConnectWithoutApplicationInput
    upsert?: VacanciesUpsertWithoutApplicationInput
    connect?: VacanciesWhereUniqueInput
    update?: XOR<XOR<VacanciesUpdateToOneWithWhereWithoutApplicationInput, VacanciesUpdateWithoutApplicationInput>, VacanciesUncheckedUpdateWithoutApplicationInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput> | UsersCreateWithoutCompanyInput[] | UsersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCompanyInput | UsersCreateOrConnectWithoutCompanyInput[]
    createMany?: UsersCreateManyCompanyInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type VacanciesCreateNestedManyWithoutCompanyInput = {
    create?: XOR<VacanciesCreateWithoutCompanyInput, VacanciesUncheckedCreateWithoutCompanyInput> | VacanciesCreateWithoutCompanyInput[] | VacanciesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VacanciesCreateOrConnectWithoutCompanyInput | VacanciesCreateOrConnectWithoutCompanyInput[]
    createMany?: VacanciesCreateManyCompanyInputEnvelope
    connect?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput> | UsersCreateWithoutCompanyInput[] | UsersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCompanyInput | UsersCreateOrConnectWithoutCompanyInput[]
    createMany?: UsersCreateManyCompanyInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type VacanciesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<VacanciesCreateWithoutCompanyInput, VacanciesUncheckedCreateWithoutCompanyInput> | VacanciesCreateWithoutCompanyInput[] | VacanciesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VacanciesCreateOrConnectWithoutCompanyInput | VacanciesCreateOrConnectWithoutCompanyInput[]
    createMany?: VacanciesCreateManyCompanyInputEnvelope
    connect?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput> | UsersCreateWithoutCompanyInput[] | UsersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCompanyInput | UsersCreateOrConnectWithoutCompanyInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutCompanyInput | UsersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UsersCreateManyCompanyInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutCompanyInput | UsersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutCompanyInput | UsersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type VacanciesUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<VacanciesCreateWithoutCompanyInput, VacanciesUncheckedCreateWithoutCompanyInput> | VacanciesCreateWithoutCompanyInput[] | VacanciesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VacanciesCreateOrConnectWithoutCompanyInput | VacanciesCreateOrConnectWithoutCompanyInput[]
    upsert?: VacanciesUpsertWithWhereUniqueWithoutCompanyInput | VacanciesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: VacanciesCreateManyCompanyInputEnvelope
    set?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
    disconnect?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
    delete?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
    connect?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
    update?: VacanciesUpdateWithWhereUniqueWithoutCompanyInput | VacanciesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: VacanciesUpdateManyWithWhereWithoutCompanyInput | VacanciesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: VacanciesScalarWhereInput | VacanciesScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput> | UsersCreateWithoutCompanyInput[] | UsersUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutCompanyInput | UsersCreateOrConnectWithoutCompanyInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutCompanyInput | UsersUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UsersCreateManyCompanyInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutCompanyInput | UsersUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutCompanyInput | UsersUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type VacanciesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<VacanciesCreateWithoutCompanyInput, VacanciesUncheckedCreateWithoutCompanyInput> | VacanciesCreateWithoutCompanyInput[] | VacanciesUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VacanciesCreateOrConnectWithoutCompanyInput | VacanciesCreateOrConnectWithoutCompanyInput[]
    upsert?: VacanciesUpsertWithWhereUniqueWithoutCompanyInput | VacanciesUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: VacanciesCreateManyCompanyInputEnvelope
    set?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
    disconnect?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
    delete?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
    connect?: VacanciesWhereUniqueInput | VacanciesWhereUniqueInput[]
    update?: VacanciesUpdateWithWhereUniqueWithoutCompanyInput | VacanciesUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: VacanciesUpdateManyWithWhereWithoutCompanyInput | VacanciesUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: VacanciesScalarWhereInput | VacanciesScalarWhereInput[]
  }

  export type ApplicationsCreateNestedManyWithoutVacancyInput = {
    create?: XOR<ApplicationsCreateWithoutVacancyInput, ApplicationsUncheckedCreateWithoutVacancyInput> | ApplicationsCreateWithoutVacancyInput[] | ApplicationsUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVacancyInput | ApplicationsCreateOrConnectWithoutVacancyInput[]
    createMany?: ApplicationsCreateManyVacancyInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutVacancyInput = {
    create?: XOR<CompanyCreateWithoutVacancyInput, CompanyUncheckedCreateWithoutVacancyInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVacancyInput
    connect?: CompanyWhereUniqueInput
  }

  export type RequirementsCreateNestedManyWithoutVacancyInput = {
    create?: XOR<RequirementsCreateWithoutVacancyInput, RequirementsUncheckedCreateWithoutVacancyInput> | RequirementsCreateWithoutVacancyInput[] | RequirementsUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: RequirementsCreateOrConnectWithoutVacancyInput | RequirementsCreateOrConnectWithoutVacancyInput[]
    createMany?: RequirementsCreateManyVacancyInputEnvelope
    connect?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutVacancyInput = {
    create?: XOR<ApplicationsCreateWithoutVacancyInput, ApplicationsUncheckedCreateWithoutVacancyInput> | ApplicationsCreateWithoutVacancyInput[] | ApplicationsUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVacancyInput | ApplicationsCreateOrConnectWithoutVacancyInput[]
    createMany?: ApplicationsCreateManyVacancyInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type RequirementsUncheckedCreateNestedManyWithoutVacancyInput = {
    create?: XOR<RequirementsCreateWithoutVacancyInput, RequirementsUncheckedCreateWithoutVacancyInput> | RequirementsCreateWithoutVacancyInput[] | RequirementsUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: RequirementsCreateOrConnectWithoutVacancyInput | RequirementsCreateOrConnectWithoutVacancyInput[]
    createMany?: RequirementsCreateManyVacancyInputEnvelope
    connect?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
  }

  export type EnumVACANCY_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.VACANCY_TYPE
  }

  export type EnumVACANCY_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.VACANCY_STATUS
  }

  export type ApplicationsUpdateManyWithoutVacancyNestedInput = {
    create?: XOR<ApplicationsCreateWithoutVacancyInput, ApplicationsUncheckedCreateWithoutVacancyInput> | ApplicationsCreateWithoutVacancyInput[] | ApplicationsUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVacancyInput | ApplicationsCreateOrConnectWithoutVacancyInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutVacancyInput | ApplicationsUpsertWithWhereUniqueWithoutVacancyInput[]
    createMany?: ApplicationsCreateManyVacancyInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutVacancyInput | ApplicationsUpdateWithWhereUniqueWithoutVacancyInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutVacancyInput | ApplicationsUpdateManyWithWhereWithoutVacancyInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type CompanyUpdateOneRequiredWithoutVacancyNestedInput = {
    create?: XOR<CompanyCreateWithoutVacancyInput, CompanyUncheckedCreateWithoutVacancyInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVacancyInput
    upsert?: CompanyUpsertWithoutVacancyInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutVacancyInput, CompanyUpdateWithoutVacancyInput>, CompanyUncheckedUpdateWithoutVacancyInput>
  }

  export type RequirementsUpdateManyWithoutVacancyNestedInput = {
    create?: XOR<RequirementsCreateWithoutVacancyInput, RequirementsUncheckedCreateWithoutVacancyInput> | RequirementsCreateWithoutVacancyInput[] | RequirementsUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: RequirementsCreateOrConnectWithoutVacancyInput | RequirementsCreateOrConnectWithoutVacancyInput[]
    upsert?: RequirementsUpsertWithWhereUniqueWithoutVacancyInput | RequirementsUpsertWithWhereUniqueWithoutVacancyInput[]
    createMany?: RequirementsCreateManyVacancyInputEnvelope
    set?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
    disconnect?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
    delete?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
    connect?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
    update?: RequirementsUpdateWithWhereUniqueWithoutVacancyInput | RequirementsUpdateWithWhereUniqueWithoutVacancyInput[]
    updateMany?: RequirementsUpdateManyWithWhereWithoutVacancyInput | RequirementsUpdateManyWithWhereWithoutVacancyInput[]
    deleteMany?: RequirementsScalarWhereInput | RequirementsScalarWhereInput[]
  }

  export type ApplicationsUncheckedUpdateManyWithoutVacancyNestedInput = {
    create?: XOR<ApplicationsCreateWithoutVacancyInput, ApplicationsUncheckedCreateWithoutVacancyInput> | ApplicationsCreateWithoutVacancyInput[] | ApplicationsUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutVacancyInput | ApplicationsCreateOrConnectWithoutVacancyInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutVacancyInput | ApplicationsUpsertWithWhereUniqueWithoutVacancyInput[]
    createMany?: ApplicationsCreateManyVacancyInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutVacancyInput | ApplicationsUpdateWithWhereUniqueWithoutVacancyInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutVacancyInput | ApplicationsUpdateManyWithWhereWithoutVacancyInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type RequirementsUncheckedUpdateManyWithoutVacancyNestedInput = {
    create?: XOR<RequirementsCreateWithoutVacancyInput, RequirementsUncheckedCreateWithoutVacancyInput> | RequirementsCreateWithoutVacancyInput[] | RequirementsUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: RequirementsCreateOrConnectWithoutVacancyInput | RequirementsCreateOrConnectWithoutVacancyInput[]
    upsert?: RequirementsUpsertWithWhereUniqueWithoutVacancyInput | RequirementsUpsertWithWhereUniqueWithoutVacancyInput[]
    createMany?: RequirementsCreateManyVacancyInputEnvelope
    set?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
    disconnect?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
    delete?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
    connect?: RequirementsWhereUniqueInput | RequirementsWhereUniqueInput[]
    update?: RequirementsUpdateWithWhereUniqueWithoutVacancyInput | RequirementsUpdateWithWhereUniqueWithoutVacancyInput[]
    updateMany?: RequirementsUpdateManyWithWhereWithoutVacancyInput | RequirementsUpdateManyWithWhereWithoutVacancyInput[]
    deleteMany?: RequirementsScalarWhereInput | RequirementsScalarWhereInput[]
  }

  export type VacanciesCreateNestedOneWithoutRequirementsInput = {
    create?: XOR<VacanciesCreateWithoutRequirementsInput, VacanciesUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: VacanciesCreateOrConnectWithoutRequirementsInput
    connect?: VacanciesWhereUniqueInput
  }

  export type EnumREQUIREMENT_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.REQUIREMENT_STATUS
  }

  export type VacanciesUpdateOneRequiredWithoutRequirementsNestedInput = {
    create?: XOR<VacanciesCreateWithoutRequirementsInput, VacanciesUncheckedCreateWithoutRequirementsInput>
    connectOrCreate?: VacanciesCreateOrConnectWithoutRequirementsInput
    upsert?: VacanciesUpsertWithoutRequirementsInput
    connect?: VacanciesWhereUniqueInput
    update?: XOR<XOR<VacanciesUpdateToOneWithWhereWithoutRequirementsInput, VacanciesUpdateWithoutRequirementsInput>, VacanciesUncheckedUpdateWithoutRequirementsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUSER_ROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_ROLE | EnumUSER_ROLEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_ROLEFilter<$PrismaModel> | $Enums.USER_ROLE
  }

  export type NestedEnumGENDERNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER | EnumGENDERFieldRefInput<$PrismaModel> | null
    in?: $Enums.GENDER[] | ListEnumGENDERFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GENDER[] | ListEnumGENDERFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGENDERNullableFilter<$PrismaModel> | $Enums.GENDER | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumUSER_ROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_ROLE | EnumUSER_ROLEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_ROLEWithAggregatesFilter<$PrismaModel> | $Enums.USER_ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_ROLEFilter<$PrismaModel>
    _max?: NestedEnumUSER_ROLEFilter<$PrismaModel>
  }

  export type NestedEnumGENDERNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER | EnumGENDERFieldRefInput<$PrismaModel> | null
    in?: $Enums.GENDER[] | ListEnumGENDERFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.GENDER[] | ListEnumGENDERFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGENDERNullableWithAggregatesFilter<$PrismaModel> | $Enums.GENDER | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGENDERNullableFilter<$PrismaModel>
    _max?: NestedEnumGENDERNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumVACANCY_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.VACANCY_TYPE | EnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.VACANCY_TYPE[] | ListEnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.VACANCY_TYPE[] | ListEnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumVACANCY_TYPEFilter<$PrismaModel> | $Enums.VACANCY_TYPE
  }

  export type NestedEnumVACANCY_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.VACANCY_STATUS | EnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.VACANCY_STATUS[] | ListEnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.VACANCY_STATUS[] | ListEnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumVACANCY_STATUSFilter<$PrismaModel> | $Enums.VACANCY_STATUS
  }

  export type NestedEnumVACANCY_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VACANCY_TYPE | EnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.VACANCY_TYPE[] | ListEnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.VACANCY_TYPE[] | ListEnumVACANCY_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumVACANCY_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.VACANCY_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVACANCY_TYPEFilter<$PrismaModel>
    _max?: NestedEnumVACANCY_TYPEFilter<$PrismaModel>
  }

  export type NestedEnumVACANCY_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VACANCY_STATUS | EnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.VACANCY_STATUS[] | ListEnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.VACANCY_STATUS[] | ListEnumVACANCY_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumVACANCY_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.VACANCY_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVACANCY_STATUSFilter<$PrismaModel>
    _max?: NestedEnumVACANCY_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumREQUIREMENT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.REQUIREMENT_STATUS | EnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.REQUIREMENT_STATUS[] | ListEnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.REQUIREMENT_STATUS[] | ListEnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumREQUIREMENT_STATUSFilter<$PrismaModel> | $Enums.REQUIREMENT_STATUS
  }

  export type NestedEnumREQUIREMENT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.REQUIREMENT_STATUS | EnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.REQUIREMENT_STATUS[] | ListEnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.REQUIREMENT_STATUS[] | ListEnumREQUIREMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumREQUIREMENT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.REQUIREMENT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumREQUIREMENT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumREQUIREMENT_STATUSFilter<$PrismaModel>
  }

  export type ApplicationsCreateWithoutUserInput = {
    created_at?: Date | string
    vacancy: VacanciesCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationsUncheckedCreateWithoutUserInput = {
    id?: number
    vacancy_id: number
    created_at?: Date | string
  }

  export type ApplicationsCreateOrConnectWithoutUserInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput>
  }

  export type ApplicationsCreateManyUserInputEnvelope = {
    data: ApplicationsCreateManyUserInput | ApplicationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutUserInput = {
    name: string
    logo: string
    created_at?: Date | string
    vacancy?: VacanciesCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    logo: string
    created_at?: Date | string
    vacancy?: VacanciesUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutUserInput, ApplicationsUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutUserInput, ApplicationsUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationsScalarWhereInput = {
    AND?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
    OR?: ApplicationsScalarWhereInput[]
    NOT?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
    id?: IntFilter<"Applications"> | number
    user_id?: StringFilter<"Applications"> | string
    vacancy_id?: IntFilter<"Applications"> | number
    created_at?: DateTimeFilter<"Applications"> | Date | string
  }

  export type CompanyUpsertWithoutUserInput = {
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vacancy?: VacanciesUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vacancy?: VacanciesUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UsersCreateWithoutApplicationInput = {
    id?: string
    full_name?: string | null
    role?: $Enums.USER_ROLE
    date_of_birth?: string | null
    gender?: $Enums.GENDER | null
    domicile?: string | null
    phone?: string | null
    email: string
    password?: string | null
    linkedin_url?: string | null
    avatar?: string | null
    created_at?: Date | string
    company?: CompanyCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutApplicationInput = {
    id?: string
    full_name?: string | null
    role?: $Enums.USER_ROLE
    date_of_birth?: string | null
    gender?: $Enums.GENDER | null
    domicile?: string | null
    phone?: string | null
    email: string
    password?: string | null
    linkedin_url?: string | null
    avatar?: string | null
    company_id?: number | null
    created_at?: Date | string
  }

  export type UsersCreateOrConnectWithoutApplicationInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutApplicationInput, UsersUncheckedCreateWithoutApplicationInput>
  }

  export type VacanciesCreateWithoutApplicationInput = {
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutVacancyInput
    requirements?: RequirementsCreateNestedManyWithoutVacancyInput
  }

  export type VacanciesUncheckedCreateWithoutApplicationInput = {
    id?: number
    company_id: number
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
    requirements?: RequirementsUncheckedCreateNestedManyWithoutVacancyInput
  }

  export type VacanciesCreateOrConnectWithoutApplicationInput = {
    where: VacanciesWhereUniqueInput
    create: XOR<VacanciesCreateWithoutApplicationInput, VacanciesUncheckedCreateWithoutApplicationInput>
  }

  export type UsersUpsertWithoutApplicationInput = {
    update: XOR<UsersUpdateWithoutApplicationInput, UsersUncheckedUpdateWithoutApplicationInput>
    create: XOR<UsersCreateWithoutApplicationInput, UsersUncheckedCreateWithoutApplicationInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutApplicationInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutApplicationInput, UsersUncheckedUpdateWithoutApplicationInput>
  }

  export type UsersUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    date_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGENDERFieldUpdateOperationsInput | $Enums.GENDER | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    date_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGENDERFieldUpdateOperationsInput | $Enums.GENDER | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    company_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacanciesUpsertWithoutApplicationInput = {
    update: XOR<VacanciesUpdateWithoutApplicationInput, VacanciesUncheckedUpdateWithoutApplicationInput>
    create: XOR<VacanciesCreateWithoutApplicationInput, VacanciesUncheckedCreateWithoutApplicationInput>
    where?: VacanciesWhereInput
  }

  export type VacanciesUpdateToOneWithWhereWithoutApplicationInput = {
    where?: VacanciesWhereInput
    data: XOR<VacanciesUpdateWithoutApplicationInput, VacanciesUncheckedUpdateWithoutApplicationInput>
  }

  export type VacanciesUpdateWithoutApplicationInput = {
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutVacancyNestedInput
    requirements?: RequirementsUpdateManyWithoutVacancyNestedInput
  }

  export type VacanciesUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requirements?: RequirementsUncheckedUpdateManyWithoutVacancyNestedInput
  }

  export type UsersCreateWithoutCompanyInput = {
    id?: string
    full_name?: string | null
    role?: $Enums.USER_ROLE
    date_of_birth?: string | null
    gender?: $Enums.GENDER | null
    domicile?: string | null
    phone?: string | null
    email: string
    password?: string | null
    linkedin_url?: string | null
    avatar?: string | null
    created_at?: Date | string
    application?: ApplicationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCompanyInput = {
    id?: string
    full_name?: string | null
    role?: $Enums.USER_ROLE
    date_of_birth?: string | null
    gender?: $Enums.GENDER | null
    domicile?: string | null
    phone?: string | null
    email: string
    password?: string | null
    linkedin_url?: string | null
    avatar?: string | null
    created_at?: Date | string
    application?: ApplicationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCompanyInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput>
  }

  export type UsersCreateManyCompanyInputEnvelope = {
    data: UsersCreateManyCompanyInput | UsersCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type VacanciesCreateWithoutCompanyInput = {
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
    application?: ApplicationsCreateNestedManyWithoutVacancyInput
    requirements?: RequirementsCreateNestedManyWithoutVacancyInput
  }

  export type VacanciesUncheckedCreateWithoutCompanyInput = {
    id?: number
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
    application?: ApplicationsUncheckedCreateNestedManyWithoutVacancyInput
    requirements?: RequirementsUncheckedCreateNestedManyWithoutVacancyInput
  }

  export type VacanciesCreateOrConnectWithoutCompanyInput = {
    where: VacanciesWhereUniqueInput
    create: XOR<VacanciesCreateWithoutCompanyInput, VacanciesUncheckedCreateWithoutCompanyInput>
  }

  export type VacanciesCreateManyCompanyInputEnvelope = {
    data: VacanciesCreateManyCompanyInput | VacanciesCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutCompanyInput, UsersUncheckedUpdateWithoutCompanyInput>
    create: XOR<UsersCreateWithoutCompanyInput, UsersUncheckedCreateWithoutCompanyInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutCompanyInput, UsersUncheckedUpdateWithoutCompanyInput>
  }

  export type UsersUpdateManyWithWhereWithoutCompanyInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: StringFilter<"Users"> | string
    full_name?: StringNullableFilter<"Users"> | string | null
    role?: EnumUSER_ROLEFilter<"Users"> | $Enums.USER_ROLE
    date_of_birth?: StringNullableFilter<"Users"> | string | null
    gender?: EnumGENDERNullableFilter<"Users"> | $Enums.GENDER | null
    domicile?: StringNullableFilter<"Users"> | string | null
    phone?: StringNullableFilter<"Users"> | string | null
    email?: StringFilter<"Users"> | string
    password?: StringNullableFilter<"Users"> | string | null
    linkedin_url?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    company_id?: IntNullableFilter<"Users"> | number | null
    created_at?: DateTimeFilter<"Users"> | Date | string
  }

  export type VacanciesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: VacanciesWhereUniqueInput
    update: XOR<VacanciesUpdateWithoutCompanyInput, VacanciesUncheckedUpdateWithoutCompanyInput>
    create: XOR<VacanciesCreateWithoutCompanyInput, VacanciesUncheckedCreateWithoutCompanyInput>
  }

  export type VacanciesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: VacanciesWhereUniqueInput
    data: XOR<VacanciesUpdateWithoutCompanyInput, VacanciesUncheckedUpdateWithoutCompanyInput>
  }

  export type VacanciesUpdateManyWithWhereWithoutCompanyInput = {
    where: VacanciesScalarWhereInput
    data: XOR<VacanciesUpdateManyMutationInput, VacanciesUncheckedUpdateManyWithoutCompanyInput>
  }

  export type VacanciesScalarWhereInput = {
    AND?: VacanciesScalarWhereInput | VacanciesScalarWhereInput[]
    OR?: VacanciesScalarWhereInput[]
    NOT?: VacanciesScalarWhereInput | VacanciesScalarWhereInput[]
    id?: IntFilter<"Vacancies"> | number
    company_id?: IntFilter<"Vacancies"> | number
    position?: StringFilter<"Vacancies"> | string
    type?: EnumVACANCY_TYPEFilter<"Vacancies"> | $Enums.VACANCY_TYPE
    jobdesc?: StringFilter<"Vacancies"> | string
    placement?: StringFilter<"Vacancies"> | string
    min_salary?: IntFilter<"Vacancies"> | number
    max_salary?: IntFilter<"Vacancies"> | number
    status?: EnumVACANCY_STATUSFilter<"Vacancies"> | $Enums.VACANCY_STATUS
    started_at?: DateTimeFilter<"Vacancies"> | Date | string
    created_at?: DateTimeFilter<"Vacancies"> | Date | string
  }

  export type ApplicationsCreateWithoutVacancyInput = {
    created_at?: Date | string
    user?: UsersCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationsUncheckedCreateWithoutVacancyInput = {
    id?: number
    user_id: string
    created_at?: Date | string
  }

  export type ApplicationsCreateOrConnectWithoutVacancyInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutVacancyInput, ApplicationsUncheckedCreateWithoutVacancyInput>
  }

  export type ApplicationsCreateManyVacancyInputEnvelope = {
    data: ApplicationsCreateManyVacancyInput | ApplicationsCreateManyVacancyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutVacancyInput = {
    name: string
    logo: string
    created_at?: Date | string
    user?: UsersCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutVacancyInput = {
    id?: number
    name: string
    logo: string
    created_at?: Date | string
    user?: UsersUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutVacancyInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutVacancyInput, CompanyUncheckedCreateWithoutVacancyInput>
  }

  export type RequirementsCreateWithoutVacancyInput = {
    field_name: string
    status: $Enums.REQUIREMENT_STATUS
    created_at?: Date | string
  }

  export type RequirementsUncheckedCreateWithoutVacancyInput = {
    id?: number
    field_name: string
    status: $Enums.REQUIREMENT_STATUS
    created_at?: Date | string
  }

  export type RequirementsCreateOrConnectWithoutVacancyInput = {
    where: RequirementsWhereUniqueInput
    create: XOR<RequirementsCreateWithoutVacancyInput, RequirementsUncheckedCreateWithoutVacancyInput>
  }

  export type RequirementsCreateManyVacancyInputEnvelope = {
    data: RequirementsCreateManyVacancyInput | RequirementsCreateManyVacancyInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutVacancyInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutVacancyInput, ApplicationsUncheckedUpdateWithoutVacancyInput>
    create: XOR<ApplicationsCreateWithoutVacancyInput, ApplicationsUncheckedCreateWithoutVacancyInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutVacancyInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutVacancyInput, ApplicationsUncheckedUpdateWithoutVacancyInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutVacancyInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutVacancyInput>
  }

  export type CompanyUpsertWithoutVacancyInput = {
    update: XOR<CompanyUpdateWithoutVacancyInput, CompanyUncheckedUpdateWithoutVacancyInput>
    create: XOR<CompanyCreateWithoutVacancyInput, CompanyUncheckedCreateWithoutVacancyInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutVacancyInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutVacancyInput, CompanyUncheckedUpdateWithoutVacancyInput>
  }

  export type CompanyUpdateWithoutVacancyInput = {
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutVacancyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type RequirementsUpsertWithWhereUniqueWithoutVacancyInput = {
    where: RequirementsWhereUniqueInput
    update: XOR<RequirementsUpdateWithoutVacancyInput, RequirementsUncheckedUpdateWithoutVacancyInput>
    create: XOR<RequirementsCreateWithoutVacancyInput, RequirementsUncheckedCreateWithoutVacancyInput>
  }

  export type RequirementsUpdateWithWhereUniqueWithoutVacancyInput = {
    where: RequirementsWhereUniqueInput
    data: XOR<RequirementsUpdateWithoutVacancyInput, RequirementsUncheckedUpdateWithoutVacancyInput>
  }

  export type RequirementsUpdateManyWithWhereWithoutVacancyInput = {
    where: RequirementsScalarWhereInput
    data: XOR<RequirementsUpdateManyMutationInput, RequirementsUncheckedUpdateManyWithoutVacancyInput>
  }

  export type RequirementsScalarWhereInput = {
    AND?: RequirementsScalarWhereInput | RequirementsScalarWhereInput[]
    OR?: RequirementsScalarWhereInput[]
    NOT?: RequirementsScalarWhereInput | RequirementsScalarWhereInput[]
    id?: IntFilter<"Requirements"> | number
    vacancy_id?: IntFilter<"Requirements"> | number
    field_name?: StringFilter<"Requirements"> | string
    status?: EnumREQUIREMENT_STATUSFilter<"Requirements"> | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFilter<"Requirements"> | Date | string
  }

  export type VacanciesCreateWithoutRequirementsInput = {
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
    application?: ApplicationsCreateNestedManyWithoutVacancyInput
    company: CompanyCreateNestedOneWithoutVacancyInput
  }

  export type VacanciesUncheckedCreateWithoutRequirementsInput = {
    id?: number
    company_id: number
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
    application?: ApplicationsUncheckedCreateNestedManyWithoutVacancyInput
  }

  export type VacanciesCreateOrConnectWithoutRequirementsInput = {
    where: VacanciesWhereUniqueInput
    create: XOR<VacanciesCreateWithoutRequirementsInput, VacanciesUncheckedCreateWithoutRequirementsInput>
  }

  export type VacanciesUpsertWithoutRequirementsInput = {
    update: XOR<VacanciesUpdateWithoutRequirementsInput, VacanciesUncheckedUpdateWithoutRequirementsInput>
    create: XOR<VacanciesCreateWithoutRequirementsInput, VacanciesUncheckedCreateWithoutRequirementsInput>
    where?: VacanciesWhereInput
  }

  export type VacanciesUpdateToOneWithWhereWithoutRequirementsInput = {
    where?: VacanciesWhereInput
    data: XOR<VacanciesUpdateWithoutRequirementsInput, VacanciesUncheckedUpdateWithoutRequirementsInput>
  }

  export type VacanciesUpdateWithoutRequirementsInput = {
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUpdateManyWithoutVacancyNestedInput
    company?: CompanyUpdateOneRequiredWithoutVacancyNestedInput
  }

  export type VacanciesUncheckedUpdateWithoutRequirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUncheckedUpdateManyWithoutVacancyNestedInput
  }

  export type ApplicationsCreateManyUserInput = {
    id?: number
    vacancy_id: number
    created_at?: Date | string
  }

  export type ApplicationsUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vacancy?: VacanciesUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vacancy_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    vacancy_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyCompanyInput = {
    id?: string
    full_name?: string | null
    role?: $Enums.USER_ROLE
    date_of_birth?: string | null
    gender?: $Enums.GENDER | null
    domicile?: string | null
    phone?: string | null
    email: string
    password?: string | null
    linkedin_url?: string | null
    avatar?: string | null
    created_at?: Date | string
  }

  export type VacanciesCreateManyCompanyInput = {
    id?: number
    position: string
    type: $Enums.VACANCY_TYPE
    jobdesc: string
    placement: string
    min_salary: number
    max_salary: number
    status?: $Enums.VACANCY_STATUS
    started_at: Date | string
    created_at?: Date | string
  }

  export type UsersUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    date_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGENDERFieldUpdateOperationsInput | $Enums.GENDER | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    date_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGENDERFieldUpdateOperationsInput | $Enums.GENDER | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    date_of_birth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGENDERFieldUpdateOperationsInput | $Enums.GENDER | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacanciesUpdateWithoutCompanyInput = {
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUpdateManyWithoutVacancyNestedInput
    requirements?: RequirementsUpdateManyWithoutVacancyNestedInput
  }

  export type VacanciesUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationsUncheckedUpdateManyWithoutVacancyNestedInput
    requirements?: RequirementsUncheckedUpdateManyWithoutVacancyNestedInput
  }

  export type VacanciesUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    type?: EnumVACANCY_TYPEFieldUpdateOperationsInput | $Enums.VACANCY_TYPE
    jobdesc?: StringFieldUpdateOperationsInput | string
    placement?: StringFieldUpdateOperationsInput | string
    min_salary?: IntFieldUpdateOperationsInput | number
    max_salary?: IntFieldUpdateOperationsInput | number
    status?: EnumVACANCY_STATUSFieldUpdateOperationsInput | $Enums.VACANCY_STATUS
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsCreateManyVacancyInput = {
    id?: number
    user_id: string
    created_at?: Date | string
  }

  export type RequirementsCreateManyVacancyInput = {
    id?: number
    field_name: string
    status: $Enums.REQUIREMENT_STATUS
    created_at?: Date | string
  }

  export type ApplicationsUpdateWithoutVacancyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutVacancyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutVacancyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementsUpdateWithoutVacancyInput = {
    field_name?: StringFieldUpdateOperationsInput | string
    status?: EnumREQUIREMENT_STATUSFieldUpdateOperationsInput | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementsUncheckedUpdateWithoutVacancyInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    status?: EnumREQUIREMENT_STATUSFieldUpdateOperationsInput | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequirementsUncheckedUpdateManyWithoutVacancyInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    status?: EnumREQUIREMENT_STATUSFieldUpdateOperationsInput | $Enums.REQUIREMENT_STATUS
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}